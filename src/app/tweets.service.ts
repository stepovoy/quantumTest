import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class TweetsService {

  constructor(private http: HttpClient) { }

  // getTweets() {
  //   return this.http.get('{server_ip}/api/tweets');
  // }

  getTweets(): Observable<any[]> {
    let tweet = {
      "created_at": "Thu Jun 22 21:00:00 +0000 2017",
      "id": 877994604561387500,
      "id_str": "877994604561387520",
      "text": "Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
      "truncated": false,
      "entities": {
        "hashtags": [{
          "text": "Angular",
          "indices": [103, 111]
        }],
        "symbols": [],
        "user_mentions": [],
        "urls": [{
          "url": "https://t.co/xFox78juL1",
          "expanded_url": "http://buff.ly/2sr60pf",
          "display_url": "buff.ly/2sr60pf",
          "indices": [79, 102]
        }]
      },
      "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
      "user": {
        "id": 772682964,
        "id_str": "772682964",
        "name": "SitePoint JavaScript",
        "screen_name": "SitePointJS",
        "location": "Melbourne, Australia",
        "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
        "url": "http://t.co/cCH13gqeUK",
        "entities": {
          "url": {
            "urls": [{
              "url": "http://t.co/cCH13gqeUK",
              "expanded_url": "http://sitepoint.com/javascript",
              "display_url": "sitepoint.com/javascript",
              "indices": [0, 22]
            }]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 2145,
        "friends_count": 18,
        "listed_count": 328,
        "created_at": "Wed Aug 22 02:06:33 +0000 2012",
        "favourites_count": 57,
        "utc_offset": 43200,
        "time_zone": "Wellington",
      },
    };

    let tweets = Array(10).fill(null);
    // console.log(this.tweets);
    tweets.forEach((_, index) => {
      let newTweet = JSON.parse(JSON.stringify(tweet)); // Deep copy of object to avoid every object instance change
      newTweet['user']['followers_count'] = Math.floor(Math.random() * 5000 + 1);
      tweets[index] = newTweet;
      // console.log(this.tweets[index]['user']['followers_count']);
    });
    return Observable.of(tweets);
  }
}
