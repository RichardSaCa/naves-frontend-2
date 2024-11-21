import { Routes } from '@angular/router';
import { HomeComponent } from './views/pages/home/home.component';
import { AgregarNaveComponent } from './views/pages/agregar-nave/agregar-nave.component';


export const routes: Routes = [{ path: '', component: HomeComponent },
  { path: 'agregar-nave', component: AgregarNaveComponent},
];
// export const routes: Routes = [{ path: '', component: EmployeeComponent }];
