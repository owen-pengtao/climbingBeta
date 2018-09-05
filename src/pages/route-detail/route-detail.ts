import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RouteDetailService} from "./routeDetail.service";
import {Beta} from "../model";

@IonicPage()
@Component({
  selector: 'page-route-detail',
  templateUrl: 'route-detail.html',
  providers: [ RouteDetailService ]
})
export class RouteDetailPage {
  selectedRouteId: number = 0;
  betaList: Beta[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private routeDetailService: RouteDetailService) {
    this.selectedRouteId = navParams.get("routeId");
    this.getBetaDetail(this.selectedRouteId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RouteDetailPage');
  }

  getBetaDetail(routeId) {
    this.routeDetailService.getBetasByRouteId(routeId).subscribe((res: Beta[]) => {
      this.betaList = res;
    });
  }
}
