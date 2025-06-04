import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { importProvidersFrom } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

bootstrapApplication(App, {
  providers: [
    ...appConfig.providers,
    importProvidersFrom(MarkdownModule.forRoot()),
  ],
}).catch((err) => console.error(err));
