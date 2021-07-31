import { Tenant } from './tenant';

describe('Tenant', () => {
  it('should create a tenant instance', () => {
    const tenant = new Tenant('test-tenant', 'test.tenant@mail.com', 'Test', 'Tenant', 'password', '+33600000000', '', true);
    expect(tenant).toBeTruthy();
    expect(tenant.type).toBe('tenant');
  });
});
