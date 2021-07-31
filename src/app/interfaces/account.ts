export class Account {
  readonly type: 'owner' | 'tenant';
  readonly id: string;
  readonly email: string;
  firstname: string;
  lastname: string;
  password: string;
  phone: string;
  avatar: string;

  constructor(type: 'owner' | 'tenant', id: string, email: string, firstname: string,
              lastname: string, password: string, phone: string, avatar: string) {
    this.type = type;
    this.id = id;
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.password = password;
    this.phone = phone;
    this.avatar = avatar;
  }
}
