import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() ngIf: any;

  results = [];
  keywords = '';

  constructor(private route: ActivatedRoute, private searchService: SearchService) {}

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      let keywords = this.route.snapshot.paramMap.get('keywords');
      this.process(keywords);
    });
  }

  process(keywords: any) {
    this.keywords = keywords.charAt(0).toUpperCase() + keywords.slice(1);;
    this.searchService.getResults(keywords).subscribe(results => {
      this.results = results;
    },
      error =>
    console.warn(error));
  }

}
