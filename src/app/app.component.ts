  selector: 'app-root',
import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'loc-a-boat';

  constructor(private afs: AngularFireStorage) {
    // Workaround until USE_EMULATOR is supported in @angular/fire/storage
    if (!environment.production) {
      this.afs.storage.useEmulator('localhost', 9199);
    }
  }
}
