import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  base = '/uploads';

  constructor(private afs: AngularFireStorage, private http: HttpClient) {
  }

  uploadFileFromURL(url: string): Observable<number> {
    const pathname = new URL(url).pathname.split('/').pop();
    const filename = this.sanitizeFilename(pathname);
    return this.http.get(url, {responseType: 'blob'}).pipe(
      map(blob => this.afs.upload(`${this.base}/${filename}`, blob)),
      switchMap(task => task.percentageChanges())
    );
  }

  uploadFile(file: File): Observable<number> {
    return this.afs.upload(`${this.base}/${file.name}`, file).percentageChanges();
  }

  getFile(name: string): Observable<string | undefined> {
    return this.afs.ref(`${this.base}/${name}`).getDownloadURL();
  }

  sanitizeFilename(filename: string): string {
    return filename.replace(/[^a-z0-9_-]/gi, '_').replace(/_{2,}/g, '_').toLowerCase();
  }
}
