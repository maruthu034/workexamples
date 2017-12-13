import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ArticleService } from '../services/article.service';
import { Article1 } from '../services/article';

@Component({
  selector: 'app-artical-list',
  templateUrl: './article.list.component.html'
})
export class ArticleListComponent implements OnInit {
  articles: Observable<Article1[]>;
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }
  goToEdit(article: Article1) {
    this.router.navigate([article.articleId], { relativeTo: this.route });
  }
}
