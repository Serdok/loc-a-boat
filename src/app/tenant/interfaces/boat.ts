import { BoatType } from './boat-types';

export class Boat {
  readonly id: string;
  name: string;
  owner: string;
  image: string;
  seats: number;
  ratePerDay: number;
  type: BoatType;
  needsLicence: boolean;
  currentLatitude: number;
  currentLongitude: number;
  description: string;
  isAvailable: boolean;

  constructor(obj: Partial<Boat>) {
    console.log('new Boat');
    console.dir(obj);
    Object.assign(this, obj);
    // this.id = obj?.id;
    // this.name = obj?.name;
    // this.owner = obj?.owner;
    // this.image = obj?.image;
    // this.seats = obj?.seats;
    // this.ratePerDay = obj?.ratePerDay;
    // this.type = obj?.type;
    // this.needsLicence = obj?.needsLicence;
    // this.currentLatitude = obj?.currentLatitude;
    // this.currentLongitude = obj?.currentLongitude;
    // this.description = obj?.description;
    // this.isAvailable = obj?.isAvailable;
  }

  toObject(): object {
    return {...this};
  }
}
