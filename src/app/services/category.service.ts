import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Category }  from  '../models/category';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService {
  private url = 'categories';
  constructor(private http: Http) { }

  getCategories(): Promise<Category[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json().data as Category[])
      .catch(this.handleError);;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
