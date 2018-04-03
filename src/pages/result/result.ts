import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  // categories: any = ["สมุทรปราการ",
  //   "ชลบุรี",
  //   "ระยอง",
  //   "จันทบุรี",
  //   "ตราด",
  //   "ฉะเชิงเทรา",
  //   "ปราจีนบุรี",
  //   "สระแก้ว"];
  // series: any = [{
  //   name: 'xxx',
  //   data:[70.98, 64.66, 69.13, 68.07, 65.07, 72.87, 64.09, 68.44]
  // }];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private kpiProvider: KpiProvider
  ) {
    this.kpiId = this.navParams.get('id');
    this.kpiName = this.navParams.get('title');
  }

  ngOnInit() {
    this.getResult(this.kpiId);
  }

  getResult(kpiId: any) {
    this.kpiProvider.getResult(kpiId)
      .subscribe((data: any) => {
        this.categories = data.area;
        this.series = [
          { name: 'ร้อยละ', data: data.result }
        ];

        // this.categories = ["สมุทรปราการ",
        //   "ชลบุรี",
        //   "ระยอง",
        //   "จันทบุรี",
        //   "ตราด",
        //   "ฉะเชิงเทรา",
        //   "ปราจีนบุรี",
        //   "สระแก้ว"];
        // this.series = [{
        //   name: 'xxx',
        //   data: [70.98, 64.66, 69.13, 68.07, 65.07, 72.87, 64.09, 68.44]
        // }];

        this.chart.doCreateChart(this.series, this.categories);
      });
  }

}
