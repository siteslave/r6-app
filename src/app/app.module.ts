import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPageModule } from '../pages/dashboard/dashboard.module';
import { MembersPageModule } from '../pages/members/members.module';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { MemberProvider } from '../providers/member/member';
import { HttpClientModule } from '@angular/common/http';
import { KpiPageModule } from '../pages/kpi/kpi.module';
import { KpiProvider } from '../providers/kpi/kpi';
import { ResultPageModule } from '../pages/result/result.module';
import { LoginPageModule } from '../pages/login/login.module';
import { LoginProvider } from '../providers/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DashboardPageModule,
    MembersPageModule,
    SettingsPageModule,
    KpiPageModule,
    ResultPageModule,
    LoginPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MemberProvider,
    KpiProvider,
    LoginProvider
  ]
})
export class AppModule {}
