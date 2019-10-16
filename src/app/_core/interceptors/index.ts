/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

//import { TestInterceptor } from './test-interceptor';
import { JWTAuthInterceptor } from './jwt-auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { FakeApiInterceptor } from './fake-api-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    //{ provide: HTTP_INTERCEPTORS, useClass: TestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JWTAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: FakeApiInterceptor, multi: true },
  ];