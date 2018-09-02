import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BoulderingService } from "./bouldering.service";

@Component({
  selector: 'page-bouldering',
  templateUrl: 'bouldering.html',
  providers: [ BoulderingService ]
})
export class BoulderingPage {

  constructor(public navCtrl: NavController, private boulderingService: BoulderingService) {
    this.getZoneList();
  }

  getZoneList () {
    this.boulderingService.getZones().subscribe(res => {
      console.log(res);
    });
  }
}
