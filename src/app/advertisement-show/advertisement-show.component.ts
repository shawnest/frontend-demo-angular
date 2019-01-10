import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../services/advertisement.service';
import { Advertisement } from '../models/Advertisement';

@Component({
  selector: 'app-advertisement-show',
  templateUrl: './advertisement-show.component.html',
  styleUrls: ['./advertisement-show.component.scss']
})
export class AdvertisementShowComponent implements OnInit {

  advertisements: Advertisement[];

  constructor(private adService: AdvertisementService) { }

  ngOnInit() {
    this.getAdvertisements();
  }

  getAdvertisements(): void{
    this.adService.getAdvertisements()
      .subscribe(data => this.advertisements = data);
  }

}
