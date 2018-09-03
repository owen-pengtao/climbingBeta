import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RouteListService} from "./routeList.service";
import {Route} from "../model";
import {RouteDetailPage} from "../route-detail/route-detail";

/**
 * Generated class for the RouteListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-route-list',
  templateUrl: 'route-list.html',
  providers: [ RouteListService ]
})
export class RouteListPage {
  selectedZoneId: number = 0;
  routeList: Route[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private routeListService: RouteListService) {
    this.selectedZoneId = navParams.get("zoneId");
    this.getRouteList(this.selectedZoneId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RouteListPage');
  }

  getRouteList(zoneId) {
    this.routeListService.getRoutesByZoneId(zoneId).subscribe((res: Route[]) => {
      this.routeList = res;
    });
  }

  onRouteSelect (routeId) {
    this.navCtrl.push(RouteDetailPage, { routeId: routeId });
  }
}
