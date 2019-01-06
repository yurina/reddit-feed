import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from '../feed.service';
import { FeedModel, FeedData, Entries } from './feed.model';
import { Observable } from 'rxjs';
import { Entry } from '../entry.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  feedData: FeedData[] = [];
  entries: Entries[] = [];
  selectedEntry: Entry;
  page: number;
  redditUrl: string;
  limit: string;
  subReddit: string;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.redditUrl = this.feedService.redditUrl;
    this.limit = this.feedService.options.limit;
    this.subReddit = this.feedService.subReddit;
    this.getFeedData();
  }

  nextPage(after: string): void {
    this.feedService.options.after = after;
    if (this.feedService.page === 1) {
      this.feedService.options.before = null;
    }
    this.feedService.page += 1;

    this.getFeedData();
  }

  prevPage(before: string): void {
    this.feedService.options.before = before;
    this.feedService.page -= 1;

    this.getFeedData();
  }

  getFeedData(): void {
    this.feedService.getFeedModel()
      .subscribe((data: FeedModel[]) => {
          this.feedData = data['data'];
          this.entries = data['data']['children'];
          this.page = this.feedService.page;
          // Leave it here to show that with default limit = 10 reddit gives me 12 entries :(
          console.log(this.feedData);
      });
  }

  updateFeed(): void {
    this.feedService.subReddit = this.subReddit;
    this.feedService.options.limit = this.limit;
    this.feedService.page = 1;
    this.feedService.options.before = null;
    this.feedService.options.after = null;

    this.getFeedData();
  }

  onSelect(entry: Entry): void {
    this.selectedEntry = entry;
  }

  clearSelected(): void {
    this.selectedEntry = null;
    this.getFeedData();
  }
}
