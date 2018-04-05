import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { KpiProvider } from '../../providers/kpi/kpi';
import { ResultPage } from '../result/result';

import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-kpi',
  templateUrl: 'kpi.html',
  providers: [KpiProvider]
})
export class KpiPage {

  kpis = [];
  tmpKpis = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private kpiProvider: KpiProvider,
    private loadingCtrl: LoadingController
  ) {
  }

  ionViewWillEnter() {
    let query = sessionStorage.getItem('query');

    if (query) {
      this.doSearch(query);
    } else {
      this.getKpiList();
    }
    
  }

  getKpiList() {
    let date = new Date();
    let thYear = date.getFullYear() + 543;

    let loading = this.loadingCtrl.create({
      content: 'กรุณารอซักครู่...'
    });

    loading.present();

    this.kpiProvider.getList(thYear.toString())
      .subscribe((data: any) => {
        if (data.ok) {
          this.kpis = data.rows;
          this.tmpKpis = _.clone(this.kpis);
        } else {
          console.log(data.message);
        }

        loading.dismiss();
      });

  }

  goResult(kpi: any) {
    this.navCtrl.push(ResultPage, kpi);
  }

  getItems(event: any) {
    this.kpis = [];

    let query = event.target.value;
    sessionStorage.setItem('query', query);

    this.doSearch(query);
  }

  doSearch(query: any) {
    if (query && query.trim() != '') {
      let result = this.tmpKpis.filter((item) => {
        return (item.title.indexOf(query) > -1);
      });

      this.kpis = result;
    } else {
      this.kpis = _.clone(this.tmpKpis);
    }
  }

}
