import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { FeedService } from '../feed.service';
import { Entry } from '../entry.model';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.scss']
})

export class EntryDetailComponent implements OnInit {
  entry: Entry;

  constructor(
    private feedService: FeedService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
