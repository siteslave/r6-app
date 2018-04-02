import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-members',
  templateUrl: 'members.html',
})
export class MembersPage {

  id: any;
  name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // console.log(this.navParams.get('id'));
    // this.id = this.navParams.data.id;
    // this.name = this.navParams.data.name;

    this.id = this.navParams.get('id');
    this.name = this.navParams.get('name');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembersPage');
  }

}
