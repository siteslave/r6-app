import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class KpiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello KpiProvider Provider');
  }

  // getList(thYear: string) {
  //   let url = 'http://healthkpi.moph.go.th/kpi/kpi/kpi-list/?year=' + thYear;
  //   return this.http.get(url);
  // }

  getList(thYear: string = '2561', level: string = '2') {

    let token = sessionStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };


    let url = `http://localhost:3000/api/kpi/list?year=${thYear}&level=${level}`;
    return this.http.get(url, httpOptions);
  }

  getResult(kpiId: string) {
    let url = 'http://healthkpi.moph.go.th/kpi/kpi/index/?lv=2&z=06&json=true&id=' + kpiId;
    return this.http.get(url);
  }

}
