import { Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {NavigationComponent} from "./components/navigation/navigation.component";

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  { path: 'profile',
    component: ProfileComponent
  },
  { path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
