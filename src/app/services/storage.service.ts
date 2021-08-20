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
    const name = url.split('/').pop();
    const ref = this.afs.ref(`${this.base}/${name}`);
    return this.http.get(url, { responseType: 'blob'})
      .pipe(
        map((blob: Blob) => ref.put(blob, { contentType: blob.type})),
        switchMap(task => task.percentageChanges()),
      );
  }

  uploadFile(file: File): Observable<number> {
    const ref = this.afs.ref(`${this.base}/${file.name}`);
    return ref.put(file, { contentType: file.type}).percentageChanges();
  }

  getFile(name: string): Observable<string | undefined> {
    return this.afs.ref(`${this.base}/${name}`).getDownloadURL();
  }
}
