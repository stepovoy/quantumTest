import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TweetsDisplayComponent } from './tweets-display/tweets-display.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TweetsService } from './tweets.service';
import { HttpClientModule } from '@angular/common/http';
import { TweetsSortPipe } from './tweets-sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TweetsDisplayComponent,
    NotFoundComponent,
    TweetsSortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'tweets', pathMatch: 'full' },
      { path: 'tweets', component: TweetsDisplayComponent },
      {
        path: 'tweets/:id',
        component: TweetsDisplayComponent
      },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    TweetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
