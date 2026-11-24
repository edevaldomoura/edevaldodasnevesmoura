import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, UrlSerializer } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { TrailingSlashUrlSerializer } from './trailing-slash-url-serializer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(),
    { provide: UrlSerializer, useClass: TrailingSlashUrlSerializer }
  ]
};
