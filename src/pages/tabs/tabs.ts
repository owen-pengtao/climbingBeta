import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { UploadPage } from '../upload/upload';
import { BoulderingPage } from '../bouldering/bouldering';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BoulderingPage;
  tab2Root = UploadPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
