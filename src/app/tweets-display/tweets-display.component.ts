import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../tweets.service';

@Component({
  selector: 'app-tweets-display',
  templateUrl: './tweets-display.component.html',
  styleUrls: ['./tweets-display.component.css']
})
export class TweetsDisplayComponent implements OnInit {
  tweets: any = [];

  constructor(private tweetsService: TweetsService) { }

  ngOnInit() {
    this.tweetsService.getTweets().subscribe(tweets => {
      this.tweets = tweets;

      console.log(this.tweets);
    });
  }

}
