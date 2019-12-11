import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('keywords', {static: false}) keywords: ElementRef;

  constructor(private router: Router) { }

  ngOnInit() {}

  searchMeals() {
    let keywords = this.keywords.nativeElement.value.toLowerCase();
    if (keywords.length > 0) {
      this.keywords.nativeElement.value = '';
      this.router.navigate(['/search', keywords]);
    }
  }

}
