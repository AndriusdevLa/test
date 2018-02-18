import {Component, ViewChild} from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { NavController } from "ionic-angular";
import { ProfilePage } from "../pages/profile/profile";


@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  @ViewChild('mainNav') nav: NavController
  rootPage:any = LoginPage;

  goProfile() {
    // Let's navigate from TabsPage to Page1
    this.nav.push(ProfilePage);
  }
  constructor(
    platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}

