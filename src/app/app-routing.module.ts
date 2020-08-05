import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'orders' , component: OrdersComponent},
  {path: 'addproduct' , component: AddproductComponent},
  {path: '**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
