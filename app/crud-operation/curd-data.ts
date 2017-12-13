import { InMemoryDbService } from 'angular-in-memory-web-api';

export class CurdData implements InMemoryDbService {
  createDb() {
    const curd = [
      { title: 'maruthu', category: 'ui', id: 1 },
      { title: 'praveen', category: 'front end', id: 2 },
      { title: 'naga', category: 'java', id: 3 },
      { title: 'aravind', category: 'architect', id: 4 }
    ];
    return { curd };
  }
}
