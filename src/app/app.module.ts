import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompHelloWorldComponent } from './comp-hello-world/comp-hello-world.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './filter/filter.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SortComponent } from './sort/sort.component';
import{SearchComponent} from './search/search.component';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from './pipe/filter.pipe';
import { SortPipe } from './pipe/sort.pipe';

let routes : Routes = [
  {path : '', redirectTo : '/shoppinglist', pathMatch : 'full'},
  //{path : 'shoppingcartlist', component : ShoppingCartComponent},
  {path : 'shoppinglist', component : ShoppingCartComponent},
  {path : 'cart', component : CartComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    CompHelloWorldComponent,
    HeaderComponent,
    ShoppingCartComponent,
    FooterComponent,
    FilterComponent,
    ProductListComponent,
    CartComponent,
    ProductItemComponent,
    SortComponent,
    SearchComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     FormsModule,
     ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
