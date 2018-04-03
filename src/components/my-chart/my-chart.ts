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

}
