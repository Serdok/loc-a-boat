import { Boat } from './boat';

export class Station {
  readonly id: string;
  dockedBoats: Boat[];
  totalCapacity: number;
  currentCapacity: number;
  city: string;

  constructor(obj: Partial<Station>) {
    this.id = obj?.id;
    this.dockedBoats = obj?.dockedBoats;
    this.totalCapacity = obj?.totalCapacity;
    this.currentCapacity = obj?.currentCapacity;
    this.city = obj?.city;
  }

  toObject(): object {
    return {...this};
  }
}
