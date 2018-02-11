import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { People } from "../../providers/people/people";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public people = []

public shouldReorder = false;



  constructor(public navCtrl: NavController,
              public service: People)
  {
    this.service.getPeople()
      .subscribe(
        (data=>{ console.log(data); })
      )
  }

  //doRefresh(e) {
  //  this.service.getPeople()
   //   .subscribe(
    //    data => this.people = data[0],
     //   Error => console.log(Error),
     //   () => e.complete()
     // )
 // }
  toggleReorder(){
    this.shouldReorder = !this.shouldReorder
  }

}
