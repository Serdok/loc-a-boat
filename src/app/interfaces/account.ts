export class Account {
  readonly uid: string = null;
  readonly email: string = null;
  displayName: string = null;
  phoneNumber: string = null;
  photoURL: string = null;

  constructor(obj: Partial<Account>) {
    this.uid = obj?.uid;
    this.email = obj?.email;
    this.displayName = obj?.displayName;
    this.phoneNumber = obj?.phoneNumber;
    this.photoURL = obj?.photoURL;
    console.log('Account constructor() from ', obj, ': ', this);
  }

  toObject(): object {
    return { ...this};
  }
}
