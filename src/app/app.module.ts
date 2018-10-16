import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { FormularioPage } from '../pages/formulario/formulario'
import { ListRemindersPage } from '../pages/list-reminders/list-reminders'
import { TabsPage } from '../pages/tabs/tabs';

//Providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MoviesServiceProvider } from '../providers/movies-service/movies-service';
import { RemindersServiceProvider } from '../providers/reminders-service/reminders-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FormularioPage,
    ListRemindersPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FormularioPage,
    ListRemindersPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MoviesServiceProvider,
    RemindersServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
