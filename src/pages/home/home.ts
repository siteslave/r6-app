import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name: string = "Ionic framework";
  password: string;
  age: number = 15;

  build;

  version = 1.0;

  isActive: boolean = true;

  members: any = [
    { code: 20, id: 1, name: 'John Doe' },
    { code: 30, id: 2, name: 'Bill Gate' },
    { code: 40, id: 3, name: 'Steve Job' }
  ];

  constructor(public navCtrl: NavController) {
    // this.showName('Angular');
    // this.members.push({ id: 1, name: 'John Doe' });
    // this.members.push({ id: 2, name: 'Bill Gate' });

  }

  showName(name: string) {
    this.name = name;
  }

  login() {
    alert(this.name)
  }

}
