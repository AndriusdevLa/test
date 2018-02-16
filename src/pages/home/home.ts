import { Component } from '@angular/core';
import {IonicPage, ToastController} from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from '../../app/modals/user';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//public shouldReorder = false;
  user = {} as User;

  constructor(
    private aFAuth: AngularFireAuth,
              private toastCtrl: ToastController,
              )
  {
    //this.service.getPeople().subscribe( data => {
    //    this.people = data.results
    //  });


  }


  ionViewWillLoad(){
    this.aFAuth.authState.subscribe(data => {
      if(data.email && data.uid) {
        let toast = this.toastCtrl.create({
          message: `Welcome ${data.email}`,
          duration: 5000,
          position: 'bottom'
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
        toast.present();

      }
      else {
        let toast = this.toastCtrl.create({
          message: 'User not found',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      }
    })
  }



  //doRefresh(e) {
  //  this.service.getPeople().subscribe( (data) => {
  //    this.people.unshift(...data.results);
//
  //  }, (Error) => console.log(Error), () => e.complete());

  // }
  // doInfinite(e) {
  //   this.service.getPeople().subscribe(  (data) => {
  //     this.people.push(...data.results);
//
  //   },(Error) => console.log(Error),() => e.complete());
  // }

//  toggleReorder(){
  //  this.shouldReorder = !this.shouldReorder
  // }

  //pushPage(user) {

  //  this.modalCtrl.create(DetailPage, user).present()
 // }



    //zemiau registruoju page kad galeciau backinti
    //this.navCtrl.push(DetailPage, user)
    //this.navCtrl.setPages([
    // {page : HomePage},
    // {page : DetailPage, params: this.people[5]},
    // {page: HomePage},
    // {page : DetailPage, params: user}
//  ])




}
