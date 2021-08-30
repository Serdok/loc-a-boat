import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TenantService } from '../../services/tenant.service';
import { defer, Observable } from 'rxjs';
import { Tenant } from '../../interfaces/tenant';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { fileTypeValidator } from '../../directives/file-type-validator.directive';
import { StorageService } from '../../../services/storage.service';
import { first, last, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tenant-edit',
  templateUrl: './tenant-edit.component.html',
  styleUrls: ['./tenant-edit.component.sass']
})
export class TenantEditComponent implements OnInit {
  tenant$: Observable<Tenant> = null;
  group: FormGroup = null;

  constructor(private router: Router, private tenantService: TenantService, private auth: AngularFireAuth,
              private storageService: StorageService) {
    this.group = new FormGroup({
      uid: new FormControl(null, Validators.nullValidator),
      email: new FormControl(null, Validators.nullValidator),
      displayName: new FormControl(null, Validators.nullValidator),
      phoneNumber: new FormControl(null, Validators.nullValidator),
      hasPermit: new FormControl(null, Validators.nullValidator),
      imageInput: new FormControl(null, Validators.nullValidator),
      image: new FormControl(null, fileTypeValidator(/image\/*/i)),
      photo: new FormControl(null, Validators.nullValidator),
    });
  }

  ngOnInit(): void {
    this.auth.user.subscribe(user => {
      this.tenant$ = (user ? this.tenantService.getTenant(user.uid) : null);
      this.tenant$?.subscribe(tenant => {
        console.log('reset form');
        this.group.patchValue(tenant);
        this.group.get('photo').setValue(tenant.photoURL);
      });
    });
  }

  get image(): AbstractControl {
    return this.group.get('image');
  }

  get photo(): AbstractControl {
    return this.group.get('photo');
  }

  onSubmit(): void {
    const file: File = this.image.value;
    defer(() => {
      return file?.name ?
        this.uploadImage(file).pipe(
          map(url => new Tenant({ ...this.group.value, photoURL: url})),
          switchMap(tenant => this.modifyTenant(tenant))
        ) :
        this.modifyTenant(new Tenant({ ...this.group.value, photoURL: this.photo.value}));
    }).pipe(first()).subscribe(tenant => {
      console.log('updated tenant');
      console.dir(tenant);
      this.router.navigate(['landing-page'])
    });
  }

  onFileChange(event: Event): void {
    const $element: HTMLInputElement = event.currentTarget as HTMLInputElement;
    this.image.setValue($element?.files[0] ?? null);
  }

  private uploadImage(file: File): Observable<string | undefined> {
    return this.storageService.uploadFile(file).pipe(
      last(),
      switchMap(percentage => this.storageService.getFile(file.name)),
    );
  }

  private modifyTenant(tenant: Partial<Tenant>): Observable<Tenant | undefined> {
    return this.tenantService.modifyTenant(tenant);
  }
}
