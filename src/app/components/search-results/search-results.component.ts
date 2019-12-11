import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  results = [];

  constructor(private route: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit() {
    let keywords = this.route.snapshot.paramMap.get('keywords');
    this.searchService.getResults(keywords).subscribe(results => {
      this.results = results;
    },
      error =>
    console.warn(error));
  }

}
