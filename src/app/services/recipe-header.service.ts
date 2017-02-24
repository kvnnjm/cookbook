import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { RecipeHeader }  from  '../models/recipe-header';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RecipeHeaderService {
  private url = '/api/category/:id/recipes';
  constructor(private http: Http) {}

  getRecipeHeaders(category :string ): Promise<RecipeHeader[]> {
    return this.http.get(this.url.replace(":id",category+""))
      .toPromise()
      .then(response => response.json() as RecipeHeader[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
