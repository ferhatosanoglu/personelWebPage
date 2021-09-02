import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
import {
  ClientLayoutComponent,
  ClientHeaderComponent,
  BlogComponent,
  ClientFooterComponent
} from './components';
import {
  HomepageComponent,
  AboutComponent
} from './pages';

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
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
