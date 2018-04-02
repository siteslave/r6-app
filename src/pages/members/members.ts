import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MemberProvider } from '../../providers/member/member';

/**
 * Generated class for the MembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-members',
  templateUrl: 'members.html',
})
export class MembersPage {

  id: any;
  name: string;
  data: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private memberProvider: MemberProvider
  ) {
    // console.log(this.navParams.get('id'));
    // this.id = this.navParams.data.id;
    // this.name = this.navParams.data.name;

    // this.data = this.navParams.get('data');

    // console.log(this.data);
  }

  ionViewWillEnter() {
    this.getMembers();
  } 

  getMembers() {
    this.memberProvider.getMembers().subscribe((data: any) => {
        console.log(data);
        this.data = data.results;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembersPage');
  }

}
