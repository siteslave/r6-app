import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MembersPage } from '../members/members';
import { SettingsPage } from '../settings/settings';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goMembers() {
    let params = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Bill Gate' }
    ];

    this.navCtrl.push(MembersPage, { data: params });
  }

  goSettings() {
    this.navCtrl.push(SettingsPage);
  }

} // end class
