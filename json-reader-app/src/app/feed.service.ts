import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FeedModel } from './feed/feed.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class FeedService {

  feedModel: FeedModel[];
  public redditUrl = 'https://www.reddit.com';
  public subReddit = 'sweden';
  public page = 1;

  public options = {
    count: '0',
    limit: '10',
    before: null,
    after: null
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getFeedModel(): Observable<FeedModel[]> {
    if (this.subReddit === '') {
      // Message Service can be used as logs
      this.messageService.add('<br><br>FeedService: tried to search for empty sub-reddit');
    } else {
      if (this.page !== 1) {
        this.options.count = (+this.options.limit * this.page).toString();
      }
      // Message Service can be used as logs
      this.messageService.add('<br><br>FeedService: fetched entries with params: <br>' +
        ' sub-reddit => ' + this.subReddit + ',<br>' +
        ' entries per page => ' + this.options.limit + ',<br>' +
        ' page => ' + this.page + ',<br>' +
        '');

      return this.http.get<FeedModel[]>(this.redditUrl + '/r/' + this.subReddit + '.json', {
          params: this.options
        }).pipe(
          map(data => this.feedModel = data)
        );
    }
  }
}
