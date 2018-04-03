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

  categories1 = ['ม.ค', 'ก.พ', 'มี.ค'];
  categories2 = ['ม.ค', 'ก.พ', 'มี.ค'];

  data1 = [
    {
      name: 'KPI A1',
      data: [1, 0, 4]
    },
    {
      name: 'KPI A2',
      data: [5, 7, 3]
    }
  ]

  data2 = [
    {
      name: 'KPI 01',
      data: [19, 15, 20]
    },
    {
      name: 'KPI 02',
      data: [21, 23, 30]
    }
  ]

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
