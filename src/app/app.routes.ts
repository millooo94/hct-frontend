import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/pages';
import { HomeComponent } from './website/pages';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];
