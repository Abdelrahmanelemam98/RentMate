import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { AboutPageModule } from './about-page/about-page.module';
import { HomeModule } from './share/home/home.module';
import { AppRoutingModule } from './app-routing.module';
// import { MatIconModule } from '@angular/material/icon';
// import {NewsletterComponent} from './share/home/components/newsletter/newsletter.component'
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    HomeModule,
    RouterModule,

    AboutPageModule,
    CoreModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
