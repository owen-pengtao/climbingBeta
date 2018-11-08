import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RouteDetailService} from "./routeDetail.service";
import {Beta} from "../model";
import {DomSanitizer} from "@angular/platform-browser";

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
              private sanitizer: DomSanitizer,
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

  isRemoteVideo(videoSource: string) {
    return videoSource.startsWith("http");
  }

  getSafeVideoUrl(videoSource: string) {
    videoSource = this.formatYoutubeUrl(videoSource);
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoSource);
  }

  formatYoutubeUrl(videoSource: string) {
    if (videoSource.startsWith("https://youtu.be/")) {
      videoSource = 'https://www.youtube.com/embed/' + videoSource.split('/').pop();
    }
    return videoSource;
  }
}
