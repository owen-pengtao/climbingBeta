import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { BoulderingPage } from '../bouldering/bouldering';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BoulderingPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
