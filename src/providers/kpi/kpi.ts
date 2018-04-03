import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class KpiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello KpiProvider Provider');
  }

  getList(thYear: string) {
    let url = 'http://healthkpi.moph.go.th/kpi/kpi/kpi-list/?year=' + thYear;
    return this.http.get(url);
  }

  getResult(kpiId: string) {
    let url = 'http://healthkpi.moph.go.th/kpi/kpi/index/?lv=2&z=06&json=true&id=' + kpiId;
    return this.http.get(url);
  }

}
