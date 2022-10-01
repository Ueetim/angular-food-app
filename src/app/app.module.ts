import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RatingModule } from 'ng-starrating';

import { SearchComponent } from './search/search.component';

import { FormsModule } from '@angular/forms';
import { AutofocusDirective } from './autofocus.directive';
import { TagsComponent } from './tags/tags.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavComponent } from './landing-page/nav/nav.component';
import { HeroComponent } from './landing-page/hero/hero.component';
import { AboutComponent } from './landing-page/about/about.component';
import { FoodComponent } from './landing-page/food/food.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    AutofocusDirective,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    NotFoundComponent,
    FooterComponent,
    ErrorPageComponent,
    LandingPageComponent,
    NavComponent,
    HeroComponent,
    AboutComponent,
    FoodComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    FormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
