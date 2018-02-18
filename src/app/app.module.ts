
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {ErrorHandler, Injectable, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
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
import { ProfilePage } from "../pages/profile/profile";
import { HomePageModule } from "../pages/home/home.module";
import { AngularFireDatabaseModule } from "angularfire2/database-deprecated";
import { Camera } from "@ionic-native/camera";
import { Pro } from "@ionic/pro";
import { Injector } from '@angular/core';


Pro.init('2a596640', {
  appVersion: 'v1'
})

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {

    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}


@NgModule({
  declarations: [
    MyApp,
    StartPage,
    DetailPage,
    LoginPage,
    ProfilePage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HomePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StartPage,
    HomePage,
    DetailPage,
    LoginPage,
    ProfilePage,
  ],
  providers: [
    HttpClient,
    StatusBar,
    SplashScreen,
    Camera,
    IonicErrorHandler,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}

