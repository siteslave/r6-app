import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { LoginProvider } from '../../providers/login/login';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginProvider]
})
export class LoginPage {

  username: string = null;
  password: string = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loginProvider: LoginProvider,
    public alertCtrl: AlertController
  ) {
  }

  doLogin() {
    this.loginProvider.doLogin(this.username, this.password)
      .subscribe((data: any) => {
        console.log(data);
        if (data.ok) {
          let token = data.token;
          sessionStorage.setItem('token', token);
          this.navCtrl.setRoot(DashboardPage);
        } else {
          let alert = this.alertCtrl.create({
            title: 'เกิดข้อผิดพลาด!',
            subTitle: 'ชื่อผู้ใช้งาน หรือ รหัสผ่าน ไม่ถูกต้อง!',
            buttons: ['ตกลง']
          });
          alert.present();
        }
      });
  }

}
