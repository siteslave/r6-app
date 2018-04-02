import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MembersPage } from '../members/members';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad DashboardPage');
  // }

  goMembers() {
    this.navCtrl.push(MembersPage, { id: 2, name: 'Bill Gate' });
  }

  goSettings() {
    this.navCtrl.push(SettingsPage);
  }

}
