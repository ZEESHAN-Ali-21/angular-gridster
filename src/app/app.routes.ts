
import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard';
import { Analytics } from './pages/analytics';
import { Reports } from './pages/reports';
import { Users } from './pages/users';
import { Settings } from './pages/settings';
import { Help } from './pages/help';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'analytics', component: Analytics },
  { path: 'reports', component: Reports },
  { path: 'users', component: Users },
  { path: 'settings', component: Settings },
  { path: 'help', component: Help },
  { path: '**', redirectTo: 'dashboard' }
];
