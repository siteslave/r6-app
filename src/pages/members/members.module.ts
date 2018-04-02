import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MembersPage } from './members';
import { MemberProvider } from '../../providers/member/member';

@NgModule({
  declarations: [
    MembersPage,
  ],
  imports: [
    IonicPageModule.forChild(MembersPage),
  ],
  providers: [MemberProvider]
})
export class MembersPageModule {}
