import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { KpiProvider } from '../../providers/kpi/kpi';
import { ResultPage } from '../result/result';

@IonicPage()
@Component({
  selector: 'page-kpi',
  templateUrl: 'kpi.html',
  providers: [KpiProvider]
})
export class KpiPage {

  kpis = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private kpiProvider: KpiProvider,
    private loadingCtrl: LoadingController
  ) {
  }

  ionViewWillEnter() {
    this.getKpiList();
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
        this.kpis = data;
        loading.dismiss();
      });

  }

  goResult(kpi: any) {
    this.navCtrl.push(ResultPage, kpi);
  }

}
