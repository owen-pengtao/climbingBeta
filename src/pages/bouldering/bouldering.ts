import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BoulderingService } from "./bouldering.service";
import {Zone} from "../model";
import { RouteListPage } from '../route-list/route-list';

@Component({
  selector: 'page-bouldering',
  templateUrl: 'bouldering.html',
  providers: [ BoulderingService ]
})

export class BoulderingPage {
  zoneList: Zone[];

  constructor(public navCtrl: NavController, private boulderingService: BoulderingService) {
    this.getZoneList();
  }

  getZoneList () {
    this.boulderingService.getZones().subscribe((res: Zone[]) => {
      this.zoneList = res;
    });
  }

  onZoneSelect (zoneId) {
    this.navCtrl.push(RouteListPage, { zoneId: zoneId });
  }
}
