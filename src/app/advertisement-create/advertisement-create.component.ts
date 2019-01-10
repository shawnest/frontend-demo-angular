import { Component, OnInit, ViewChild } from '@angular/core';
import { Advertisement } from '../models/Advertisement';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdvertisementService } from '../services/advertisement.service';

@Component({
  selector: 'app-advertisement-create',
  templateUrl: './advertisement-create.component.html',
  styleUrls: ['./advertisement-create.component.scss']
})
export class AdvertisementCreateComponent implements OnInit {

  @ViewChild('fform') feedbackFormDirective;


  adForm : FormGroup;
  newAd : Advertisement;


  constructor(private fb:FormBuilder, private adService: AdvertisementService) { 
    this.createForm();
  }

  ngOnInit() {

  }

  createForm(){
    this.adForm = this.fb.group({
      title: ['', Validators.required ]
    });
  }

  onSubmit(){
    this.newAd = this.adForm.value;
    this.newAd.user = {
      "id" : 1,
      "name": "Tom"
    }
    this.adService.postAdvertisement(this.newAd).subscribe();
    this.adForm.reset({
      title: ['', Validators.required],
    });
    this.feedbackFormDirective.resetForm();
  }
}
