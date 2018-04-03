import { Component, OnInit, Input } from '@angular/core';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'my-chart',
  templateUrl: 'my-chart.html'
})
export class MyChartComponent implements OnInit {

  _chartType: any;

  @Input('chartType')
  set chartType(value: any) {
    this._chartType = value;
  }

  @Input('chartId') chartId;

  @Input('categories') categories = [];
  @Input('series') series = [];

  @Input('chartTitle') chartTitle = 'ตัวอย่าง Chart';

  constructor() { }

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    var myChart = HighCharts.chart(this.chartId, {
      chart: {
        type: this._chartType
      },
      credits: { enabled: false },
      title: {
        text: this.chartTitle
      },
      xAxis: {
        categories: this.categories
      },
      yAxis: {
        title: {
          text: null
        }
      },
      series: this.series
    });
  }

}
