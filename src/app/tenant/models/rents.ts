import { Rent } from '../interfaces/rent';
import { BOATS } from './boats';
import { TENANTS } from './tenants';

export const RENTS: Rent[] = [
  new Rent({
    id: 'rent-0',
    boat: BOATS[0],
    tenant: TENANTS[1],
    beginDate: new Date('2021-08-10'),
    endDate: new Date('2021-08-15'),
    seats: 3,
  }),
  new Rent({
    id: 'rent-1',
    boat: BOATS[0],
    tenant: TENANTS[0],
    beginDate: new Date('2021-08-16'),
    endDate: new Date('2021-08-20'),
    seats: 2
  }),
  new Rent({
    id: 'rent-2',
    boat: BOATS[1],
    tenant: TENANTS[1],
    beginDate: new Date('2021-08-16'),
    endDate: new Date('2021-08-24'),
    seats: 8,
  }),
  new Rent({
    id: 'rent-3',
    boat: BOATS[2],
    tenant: TENANTS[2],
    beginDate: new Date('2021-08-14'),
    endDate: new Date('2021-08-16'),
    seats: 2,
  }),
  new Rent({
    id: 'rent-4',
    boat: BOATS[3],
    tenant: TENANTS[0],
    beginDate: new Date('2021-08-20'),
    endDate: new Date('2021-08-25'),
    seats: 2
  }),
  new Rent({
    id: 'rent-5',
    boat: BOATS[0],
    tenant: TENANTS[2],
    beginDate: new Date('2021-08-20'),
    endDate: new Date('2021-08-30'),
    seats: 1,
  }),
];
