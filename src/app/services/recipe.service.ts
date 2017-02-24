import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Recipe }  from  '../models/recipe';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RecipeService {
  private url = '/api/recipe/:id';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getRecipe(recipe: string): Promise<Recipe> {
    return this.http.get(this.url.replace(":id", recipe + ""))
      .toPromise()
      .then(response => response.json() as Recipe)
      .catch(this.handleError);
  }

  saveRecipe(recipe: Recipe): void{
    this.http.put(this.url.replace(":id", recipe._id + ""), JSON.stringify(recipe), { headers: this.headers })
      .toPromise()
      .then(() => recipe)
      .catch(this.handleError);
  }

  removeRecipe(recipe: string): void {
    this.http.delete(this.url.replace(":id", recipe + ""))
      .toPromise()
      .then(() => recipe)
      .catch(this.handleError);
  }

  createRecipe(recipe: Recipe): void {
    this.http.post(this.url.replace(":id", ""), JSON.stringify(recipe), { headers: this.headers })
      .toPromise()
      .then(() => recipe)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
