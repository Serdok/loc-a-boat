import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() {
  }

  makeCapitalPopup(data: any): string {
    return 'this is it !! ';
  }
}
