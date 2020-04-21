import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from './products/products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path : '',
    redirectTo: 'home',
    pathMatch : 'full'
  },
  {
    path : 'home',
    pathMatch : 'full',
    component : HomeComponent
  },
  {
     path: 'products',
     pathMatch : 'full',
     loadChildren :'./products/products.module#ProductsModule'
  },
  {
    path: 'login',
    pathMatch: 'full',
    component : LoginComponent
  },
  {
    path: 'register',
    pathMatch: 'full',
    component : RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
