import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ProductsComponent } from './component/products-form/products.component';
import { MgproductComponent } from './component/mgproduct/mgproduct.component';

const routes: Routes = [
  {path:'', redirectTo :'admin', pathMatch :'full'},
  {path:'admin', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'products-form/:id', component:ProductsComponent},
  {path:'mgproduct', component:MgproductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
