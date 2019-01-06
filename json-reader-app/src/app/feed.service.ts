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

  public options = {
    count: '0',
    limit: '10',
    before: null,
    after: null
  };

  public page = 1;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  // getFeedData(): Observable<FeedModel[]> {
  //   // TODO: send the message _after_ fetching the entries
  //   // 
  //   // return of(ENTRIES);

  //   return this.http.get<FeedModel[]>(this.feedUrl).pipe(
  //     map(feedModel => this.feedModel = feedModel)
  //       //JSON.parse((<FeedModel>feedModel).data))
  //   );
  // }
  getFeedModel(): Observable<FeedModel[]> {
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
      })
      .pipe(map(data => this.feedModel = data))
      ;
    // .pipe(
    //   map(FeedModel => this.feedModel = FeedModel)
    // );
    // this.http.get(this.feedUrl).
    // subscribe(data => {
    //   this.feedModel = data['data'];
    //   console.log(data);
    // });
  }
  // getFeedData(): Observable<FeedModel[]> {
  //   return this.http.get<FeedModel[]>(this.feedUrl)
  //     .pipe(
  //       map(res => JSON.parse((<any>res)._body))
  //     );
  // }

  // getEntry(id: number): Observable<Entry> {
  //   const url = `${this.feedUrl}/${id}`;
  //   // this.messageService.add(`FeedService: fetched entry id=${id}`);
  //   // return of(ENTRIES.find(entry => entry.id === id));
  //   return this.http.get<Entry>(url);
  // }
}
