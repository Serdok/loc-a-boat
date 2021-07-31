import { Account } from './account';

describe('Account', () => {
  it('should create an owner instance', () => {
    const account = new Account('owner', 'test-owner', 'test.owner@mail.com', 'Test', 'Owner', 'password', '+33600000000', '');
    expect(account).toBeTruthy();
    expect(account.type).toBe('owner');
  });

  it('should create a tenant instance', () => {
    const account = new Account('tenant', 'test-tenant', 'test.tenant@mail.com', 'Test', 'Tenant', 'password', '+33600000000', '');
    expect(account).toBeTruthy();
    expect(account.type).toBe('tenant');
  });
});
