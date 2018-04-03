import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { KpiProvider } from '../../providers/kpi/kpi';
import { MyChartComponent } from '../../components/my-chart/my-chart';

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
  providers: [KpiProvider]
})
export class ResultPage implements OnInit {

  @ViewChild('chart') chart: MyChartComponent;

  kpiId: any = null;
  kpiName: string = null;
  categories: any = [];
  series: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private kpiProvider: KpiProvider,
    private loadingCtrl: LoadingController
  ) {
    this.kpiId = this.navParams.get('id');
    this.kpiName = this.navParams.get('title');
  }

  ngOnInit() {
    this.getResult(this.kpiId);
  }

  getResult(kpiId: any) {

    let loading = this.loadingCtrl.create({
      content: 'กรุณารอซักครู่...'
    });

    loading.present();

    this.kpiProvider.getResult(kpiId)
      .subscribe((data: any) => {
        this.categories = data.area;
        this.series = [
          { name: 'ร้อยละ', data: data.result }
        ];

        this.chart.doCreateChart(this.series, this.categories);

        loading.dismiss();
      });
  }

}
