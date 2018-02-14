import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { People } from "../../providers/people/people";
import { DetailPage } from '../detail/detail'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public people = []

public shouldReorder = false;



  constructor(public navCtrl: NavController,
              public service: People,
              public modalCtrl: ModalController)
  {
    this.service.getPeople().subscribe( data => {
      this.people = data.results
    });
  }

  doRefresh(e) {
    this.service.getPeople().subscribe( (data) => {
      this.people.unshift(...data.results);

    }, (Error) => console.log(Error), () => e.complete());


  }
  doInfinite(e) {
    this.service.getPeople().subscribe(  (data) => {
      this.people.push(...data.results);

    },(Error) => console.log(Error),() => e.complete());
  }
  toggleReorder(){
    this.shouldReorder = !this.shouldReorder
  }
pushPage(user) {

    this.modalCtrl.create(DetailPage, user).present()


  //zemiau registruoju page kad galeciau backinti
    //this.navCtrl.push(DetailPage, user)
  //this.navCtrl.setPages([
   // {page : HomePage},
   // {page : DetailPage, params: this.people[5]},
   // {page: HomePage},
   // {page : DetailPage, params: user}
//  ])


}

}
