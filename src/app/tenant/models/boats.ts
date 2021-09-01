import { Boat } from '../interfaces/boat';
import { BoatType } from '../interfaces/boat-types';

const g = {extra: 'a', tg: 'b'};
export const BOATS: Boat[] = [
  new Boat({
    id: 'boat-0',
    name: 'Gertrude',
    image: 'https://img.nauticexpo.fr/images_ne/photo-g/21334-313941.jpg',
    owner: 'owner-0',
    seats: 4,
    ratePerDay: 10,
    type: BoatType.CabinCruiser,
    needsLicence: false,
    currentLatitude: 0,
    currentLongitude: 0,
    description: 'A basic cabin cruiser for your leisure',
    isAvailable: true,
    ...g
  }),
  new Boat({
    id: 'boat-1',
    name: 'Bernard',
    owner: 'owner-1',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Small_center_console_fishing_boat_anchored_near_a_beach_in_The_Bahamas.jpg/1200px-Small_center_console_fishing_boat_anchored_near_a_beach_in_The_Bahamas.jpg',
    seats: 8,
    ratePerDay: 50,
    type: BoatType.CenterConsole,
    needsLicence: true,
    currentLatitude: 0,
    currentLongitude: 0,
    description: 'A familial center console',
    isAvailable: false,
  }),
  new Boat({
    id: 'boat-2',
    name: 'Gerard',
    owner: 'owner-0',
    image: 'https://i.ytimg.com/vi/t4q3TGFJyCw/maxresdefault.jpg',
    seats: 2,
    ratePerDay: 20,
    type: BoatType.Wakeboard,
    needsLicence: true,
    currentLatitude: 0,
    currentLongitude: 0,
    description: 'First-choice water skiing boat',
    isAvailable: false,
  }),
  new Boat({
    id: 'boat-3',
    name: 'Gisette',
    owner: 'owner-2',
    image: 'https://media.istockphoto.com/photos/vietnamese-fishing-boat-anchor-near-shore-travel-background-picture-id1290723883?k=6&m=1290723883&s=612x612&w=0&h=1MgYwhLSLkozzIC4z3Bi02p70028TNK8yEWUNsxhzxE=',
    seats: 4,
    ratePerDay: 20,
    type: BoatType.Fishing,
    needsLicence: true,
    currentLatitude: 0,
    currentLongitude: 0,
    description: 'Let\'s go fishing!',
    isAvailable: true,
  })
];
