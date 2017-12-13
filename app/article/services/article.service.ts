import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Article1 } from './article';

const ARTICLES = [
  new Article1(1, 'Core Java Tutorial', 'Java'),
  new Article1(2, 'Angular Tutorial', 'Angular'),
  new Article1(3, 'Hibernate Tutorial', 'Hibernate')
];
const getAllArticles = (): any => {
  throw new Error('Method not implemented.');
};

const articlesObservable = Observable.of(ARTICLES);

@Injectable()
export class ArticleService {
  getArticles(): Observable<Article1[]> {
    return articlesObservable;
  }
  getArticle(id: number): Observable<Article1> {
    return this.getArticles()
      .map(articles => articles.find(article => article.articleId === id));
  }
  updateArticle(article: Article1): Observable<Article1> {
    return this.getArticles()
      .map(articles => {
        let articleObj = articles.find(ob => ob.articleId === article.articleId);
        articleObj = article;
        return articleObj;
      }
      );
  }
}