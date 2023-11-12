import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormModule } from './modules/form/form.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormModule,
    HomepageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
