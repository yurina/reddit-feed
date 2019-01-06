import { Entry } from "../entry.model";

export class FeedModel {
  public kind: string;
  public data: FeedData;
}

export class FeedData {
  public dist: number;
  public children: Entries;
  public after: string;
  public before: string;
}

export class Entries {
  public kind: string;
  public data: Entry;
}
