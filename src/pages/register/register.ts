import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../app/modals/user";
import { AngularFireAuth } from "angularfire2/auth";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;
  constructor(private aFAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

async register(user: User){
    try {
const result = await this.aFAuth.auth.createUserWithEmailAndPassword(user.email,
  user.password);
console.log(result);
    }
    catch(e) {
      console.error(e)
    }
}
}