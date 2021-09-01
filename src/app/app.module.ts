import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import {
  ClientLayoutComponent,
  ClientHeaderComponent,
  BlogComponent
} from './components';
import {
  HomepageComponent,
  AboutComponent
} from './pages';
import { ClientFooterComponent } from './components/layouts/client/client-footer/client-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientLayoutComponent,
    ClientHeaderComponent,
    HomepageComponent,
    BlogComponent,
    AboutComponent,
    ClientFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
