import { Account } from '../../interfaces/account';

export class Tenant extends Account {
  hasPermit: boolean;

  constructor(id: string, email: string, firstname: string, lastname: string,
              password: string, phone: string, avatar: string, hasPermit: boolean) {
    super('tenant', id, email, firstname, lastname, password, phone, avatar);
    this.hasPermit = hasPermit;
  }
}
