import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RouteDetailService} from "./routeDetail.service";
import {Beta} from "../model";

/**
 * Generated class for the RouteDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-route-detail',
  templateUrl: 'route-detail.html',
  providers: [ RouteDetailService ]
})
export class RouteDetailPage {
  selectedZoneId: number = 0;
  beta: Beta;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private routeDetailService: RouteDetailService) {
    this.selectedZoneId = navParams.get("zoneId");
    console.log('selectedZoneId: ' + this.selectedZoneId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RouteDetailPage');
  }

  getBetaDetail(BetaId) {
    this.routeDetailService.getBeta(BetaId).subscribe((res: Beta) => {
      this.beta = res;
    });
  }
}
