import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { Profile } from "../../app/modals/profile";
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import { storage } from "firebase";
import { Camera, CameraOptions } from "@ionic-native/camera";



/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
profile = {} as Profile;
  constructor(private camera: Camera,
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
    //initializeApp(FIREBASE_CONFIG);
  }


async takePhoto() {
  try {
    //defining camera options
    const options: CameraOptions = {
      quality: 50,
      targetHeight: 200,
      targetWidth: 200,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    const result = await this.camera.getPicture(options);
    const image = `data:image/jpeg;base64,${result}`;

    const pictures = storage().ref('pictures');
    pictures.putString(image, 'data_url');
  }
  catch (e) {
    console.error(e)
  }
}
createProfile(){
    this.afAuth.authState.take(1).subscribe(auth => {
    this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
      .then(() => this.navCtrl.setRoot('HomePage'));
    })
}

}
