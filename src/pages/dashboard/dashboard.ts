import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MembersPage } from '../members/members';
import { SettingsPage } from '../settings/settings';

import * as HighCharts from 'highcharts';

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

  ionViewWillEnter() {
    this.createChart();
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

  createChart() {
    var myChart = HighCharts.chart('myChart', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [{
        name: 'Jane',
        data: [1, 0, 4]
      }, {
        name: 'John',
        data: [5, 7, 3]
      }]
    });
  }

} // end class
