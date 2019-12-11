import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../../services/listing.service';
import { Listing } from '../../models/Listing';
import { Location } from '@angular/common';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {
  listings: Listing[] = [];
  
  constructor(private route: ActivatedRoute, private listingService: ListingService, private location: Location) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.listingService.getListings(id).subscribe(listings => {
      this.listings = listings;
    },
      error =>
    console.warn(error));
  }

  cancel() {
    this.location.back();
  }

}