import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { StartPage } from '../pages/start/start';
import { AngularFireModule } from "angularfire2";
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { LoginPage } from "../pages/login/login";
import { AngularFireAuthModule } from "angularfire2/auth";


@NgModule({
  declarations: [
    MyApp,
    StartPage,
    HomePage,
    DetailPage,
    LoginPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StartPage,
    HomePage,
    DetailPage,
    LoginPage,
  ],
  providers: [
    HttpClient,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}

