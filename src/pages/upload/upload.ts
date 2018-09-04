import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html'
})
export class UploadPage {
  isVideoUrl: boolean = false;
  uploadForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.uploadForm = formBuilder.group({
      zone: ['1'],
      route: ['2'],
      performer: ['Owen'],
      videoPath: [''],
      videoUrl: [''],
      tips: [''],
      contacts: ['']
    });
  }

  switchVideoSource(bool: boolean) {
    this.isVideoUrl = !bool;
    console.log(this.isVideoUrl);
  }

  upload() {

  }
}
