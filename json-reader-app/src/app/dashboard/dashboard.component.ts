import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry.model';
import { FeedService } from '../feed.service';
import { FeedModel, FeedData } from '../feed/feed.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  feedData: FeedData;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.getFeedEntries();
  }

  getFeedEntries(): void {
    // this.feedService.getEntries()
    //   .subscribe(entries => this.entries = entries.slice(1, 5));
    this.feedService.getFeedModel()
      .subscribe(FeedModel => this.feedData = FeedModel["data"]);
  }
}