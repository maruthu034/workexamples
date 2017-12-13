import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Article } from '../crud-operation/services/article';

export class BookData implements InMemoryDbService {
  createDb() {
    const books = [
      { id: '1', name: 'Angular 2 by Krishna', category: 'Angular', writer: 'Krishna' },
      { id: '2', name: 'AngularJS by Krishna', category: 'Angular', writer: 'Krishna' },
      { id: '3', name: 'Angular 2 by Vishnu', category: 'Angular', writer: 'Vishnu' },
      { id: '4', name: 'Core Java by Vishnu', category: 'Java', writer: 'Vishnu' },
      { id: '5', name: 'JSP & Servlet by Vishnu', category: 'Java', writer: 'Vishnu' },
      { id: '6', name: 'JPA by Vishnu', category: 'Java', writer: 'Vishnu' },
      { id: '7', name: 'Hibernate by Krishna', category: 'Hibernate', writer: 'Krishna' }
    ];
    const article = [
      { title: 'maruthu', category: 'ui', id: 1 },
      { title: 'praveen', category: 'front end', id: 2 },
      { title: 'naga', category: 'java', id: 3 },
      { title: 'aravind', category: 'architect', id: 4 }
    ];
    return { books, article };
  }
}
