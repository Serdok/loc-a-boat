import { Station } from '../interfaces/station';
import { BOATS } from './boats';

export const STATIONS: Station[] = [
  new Station({
    id: 'station-0',
    dockedBoats: BOATS,
    totalCapacity: 6,
    currentCapacity: 2,
    city: 'Cap d\'Agde'
  }),
];
