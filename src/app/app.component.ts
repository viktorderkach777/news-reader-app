import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mArticles: Array<any>;
  mSources: Array<any>;

  constructor(private newsapi: NewsService) {}

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    // tslint:disable-next-line:no-string-literal
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
    }

  searchArticles(source: any) {
    console.log('selected source is: ' + source);
    // tslint:disable-next-line:no-string-literal
    this.newsapi.getArticlesById(source).subscribe(data => this.mArticles = data['articles']);
  }

}
