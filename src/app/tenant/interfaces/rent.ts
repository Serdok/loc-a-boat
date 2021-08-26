import { Boat } from './boat';
import { Tenant } from './tenant';

export class Rent {
  readonly id: string;
  boat: Boat;
  tenant: Tenant;
  beginDate: Date;
  endDate: Date;
  seats: number;

  constructor(obj: Partial<Rent>) {
    this.id = obj?.id;
    this.boat = obj?.boat;
    this.tenant = obj.tenant;
    this.beginDate = obj?.beginDate;
    this.endDate = obj?.endDate;
    this.seats = obj?.seats;
  }

  get duration(): number {
    return (this?.endDate.getTime() - this?.beginDate.getTime()) ?? NaN;
  }

  get totalPrice(): number {
    return (this?.boat?.ratePerDay * this.duration * this?.seats) ?? NaN;
  }

  toObject(): object {
    return {...this};
  }
}
