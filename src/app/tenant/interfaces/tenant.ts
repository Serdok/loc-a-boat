import { Account } from '../../interfaces/account';

export class Tenant extends Account {
  hasPermit = false;

  constructor(obj: Partial<Tenant>) {
    super(obj);
    this.hasPermit = obj?.hasPermit;
    console.log('Tenant constructor() from ', obj, ': ', this);
  }

  toObject(): object {
    return { ...this};
  }
}
