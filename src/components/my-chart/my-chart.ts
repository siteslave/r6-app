import { Component, OnInit, Input } from '@angular/core';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'my-chart',
  templateUrl: 'my-chart.html'
})
export class MyChartComponent implements OnInit {

  _chartType: any;
  _categories = [];
  _series = [];
  _chartTitle = 'ตัวอย่าง Chart';

  @Input('chartType')
  set setChartType(value: any) {
    this._chartType = value;
  }
  
  @Input('categories')
  set setCategories(value: any) {
    this._categories = value;
  }
  
  @Input('series')
  set setSeries(value: any) {
    this._series = value;
  }
  
  @Input('chartTitle')
  set setChartTitle(value: any) {
    this._chartTitle = value;
  }

  @Input('chartId') chartId;

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
        text: this._chartTitle
      },
      xAxis: {
        categories: this._categories
      },
      yAxis: {
        title: {
          text: null
        }
      },
      series: this._series
    });
  }

  doCreateChart(series: any, categories: any) {
    var myChart = HighCharts.chart(this.chartId, {
      chart: {
        type: this._chartType
      },
      credits: { enabled: false },
      title: {
        text: this._chartTitle
      },
      xAxis: {
        categories: categories
      },
      yAxis: {
        title: {
          text: null
        }
      },
      series: series
    });
  }
  
}
