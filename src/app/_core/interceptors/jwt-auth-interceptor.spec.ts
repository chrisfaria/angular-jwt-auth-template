import { JWTAuthInterceptor } from './jwt-auth-interceptor';

describe('JWTAuthInterceptor', () => {
  it('should create an instance', () => {
    expect(new JWTAuthInterceptor()).toBeTruthy();
  });
});
