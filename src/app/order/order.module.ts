import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MyOrdersComponent } from '../my-orders/my-orders.component';
import { ListOrdersComponent } from '../listorders/listorders.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderRoutingModule } from './order-routing.module';


@NgModule({
  declarations: [
    ListOrdersComponent,    
    MyOrdersComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }