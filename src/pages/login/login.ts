import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    RestProvider
  ]
})
export class LoginPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private restProvider : RestProvider
  ) {
  }

  ionViewDidLoad() {
    this.restProvider.setLogin().subscribe(
      data => {
        //const response = (data as any);
        //const dataJson = JSON.parse(response._body);
        console.log( data );
      }, error => {
        console.log ( error );
      }
    );
  }

}
