import { Component, OnInit } from '@angular/core';
import { Article } from './services/article';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ArticleService } from './services/article.service';

@Component({
  selector: 'app-crud-operation',
  templateUrl: './crud-operation.component.html',
  styleUrls: ['./crud-operation.component.css'],
  providers: [ArticleService]
})
export class CrudOperationComponent implements OnInit {
  // Component properties
  allArticles: Article[];
  statusCode: number;
  articleIdToUpdate = null;
  processValidation = false;
  // Create form
  articleForm = new FormGroup({
    title: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required)
  });
  // Create constructor to get service instance
  constructor(private articleService: ArticleService) {
  }
  // Create ngOnInit() and and load articles
  ngOnInit(): void {
    this.getAllArticles();
  }
  // Fetch all articles
  getAllArticles() {
    this.articleService.getAllArticles()
      .subscribe(
        (data: any)  => this.allArticles = data,
      errorCode => this.statusCode = errorCode);
    console.log('data:', this.allArticles);
  }
  // Handle create and update article
  onArticleFormSubmit() {
    this.processValidation = true;
    if (this.articleForm.invalid) {
      return; // Validation failed, exit from method.
    }
    // Form is valid, now perform create or update
    this.preProcessConfigurations();
    const article = this.articleForm.value;
    if (this.articleIdToUpdate === null) {
      // Generate article id then create article
      this.articleService.getAllArticles()
        .subscribe(articles => {

          // Generate article id
          const maxIndex = articles.length - 1;
          const articleWithMaxIndex = articles[maxIndex];
          const articleId = articleWithMaxIndex.id + 1;
          article.id = articleId;

          // Create article
          this.articleService.createArticle(article)
            .subscribe(successCode => {
              this.statusCode = successCode;
              this.getAllArticles();
              this.backToCreateArticle();
            },
            errorCode => this.statusCode = errorCode
            );
        });
    } else {
      // Handle update article
      article.id = this.articleIdToUpdate;
      this.articleService.updateArticle(article)
        .subscribe(successCode => {
          this.statusCode = successCode;
          this.getAllArticles();
          this.backToCreateArticle();
        },
        errorCode => this.statusCode = errorCode);
    }
  }
  // Load article by id to edit
  loadArticleToEdit(articleId: string) {
    this.preProcessConfigurations();
    this.articleService.getArticleById(articleId)
      .subscribe(article => {
        this.articleIdToUpdate = article.id;
        this.articleForm.setValue({ title: article.title, category: article.category });
        this.processValidation = true;
      },
      errorCode => this.statusCode = errorCode);
  }
  // Delete article
  deleteArticle(articleId: string) {
    this.preProcessConfigurations();
    this.articleService.deleteArticleById(articleId)
      .subscribe(successCode => {
        this.statusCode = successCode;
        // Expecting success code 204 from server
        this.statusCode = 204;
        this.getAllArticles();
        this.backToCreateArticle();
      },
      errorCode => this.statusCode = errorCode);
  }
  // Perform preliminary processing configurations
  preProcessConfigurations() {
    this.statusCode = null;
  }
  // Go back from update to create
  backToCreateArticle() {
    this.articleIdToUpdate = null;
    this.articleForm.reset();
    this.processValidation = false;
  }
}
