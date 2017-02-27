import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RecipeHeader }           from '../models/recipe-header';

@Injectable()
export class RecipeSearchService {
  private url = '/api/recipe/name/:name';

  constructor(private http: Http) {}

  search(term: string): Observable<RecipeHeader[]> {

    return this.http
      .get(this.url.replace(":name",term+""))
      .map(response => response.json() as RecipeHeader[]);
  }
}
