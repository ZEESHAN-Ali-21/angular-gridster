import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideEchartsCore } from 'ngx-echarts';
import { routes } from './app.routes';
import * as echarts from 'echarts';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideRouter(routes),
    provideEchartsCore({ echarts })
  ]
};