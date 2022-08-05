import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorPipe } from './author.pipe';
import { BookModule } from './book/book.module';
import { HeaderComponent } from './header/header.component';
import { OrderModule } from './order/order.module';
import { PricePipe } from './price.pipe';
import { TitlePipe } from './title.pipe';
import { YearPipe } from './year.pipe';


@NgModule({
  declarations: [
    AppComponent,    
    TitlePipe,
    AuthorPipe,
    PricePipe,
    YearPipe,
    HeaderComponent,
      

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BookModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
