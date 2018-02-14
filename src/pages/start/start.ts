import {Component, ViewChild} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import { Slides } from 'ionic-angular';

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl: ModalController) {
  }
  goToMain() {

    this.navCtrl.setRoot(HomePage);
  }
  goToSlide() {
    this.slides.slideTo(1, 500);
  }
  goToSlide2() {
    this.slides.slideTo(2, 500);
  }
  goToSlide3() {
    this.slides.slideTo(3, 500);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

}
