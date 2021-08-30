import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AvisService } from 'src/app/avis.service';
import { Avis } from 'src/app/interfaces/avis';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.sass']
})
export class AvisComponent implements OnInit {
  stars: number[] = [1, 2, 3, 4, 5];  
  avisGroup: FormGroup = null;
  selectedValue: number;

  constructor(private avisSrevice:AvisService) { 

    this.avisGroup = new FormGroup({
      note: new FormControl(null, [Validators.required]),
      commentaire: new FormControl(null, [Validators.required])
    });
  }
  ngOnInit(): void {
  }

  onSubmit(): void {
    this.avisSrevice.addAvis(new Avis(this.avisGroup.value))
  }

  countStar(star) {
    this.avisGroup.get("note").setValue(star)
    this.selectedValue = star;
    console.log('Value of star', star);
  }

}
