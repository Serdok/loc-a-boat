import { Tenant } from '../interfaces/tenant';

export const TENANTS: Tenant[] = [
  new Tenant('model-0', 'anass.lahnin@estiam.com', 'Anass', 'Lahnin', 'password', '+33600000000', '', true),
  new Tenant('model-1', 'amer.cherni@estiam.com', 'Amer', 'Cherni', 'password', '+33600000001', '', false),
  new Tenant('model-2', 'anis.bencheikh@estiam.com', 'Anis', 'Bencheikh', 'password', '+33600000002', '', true),
  new Tenant('model-3', 'charaf.maimouni@estiam.com', 'Charaf', 'Maimouni', 'password', '+33600000003', '', false),
  new Tenant('model-4', 'matthieu.damasio@estiam.com', 'Matthieu', 'Damasio', 'password', '+33600000004', '', false),
  new Tenant('model-5', 'salaheddine.habibeche@estiam.com', 'Salaheddine', 'Habibeche', 'password', '+33600000005', '', true),
  new Tenant('model-6', 'siong.tcha@estiam.com', 'Siong', 'Tcha', 'password', '+33600000006', '', false),
];
