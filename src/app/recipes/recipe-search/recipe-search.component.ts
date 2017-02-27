import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { RecipeSearchService } from '../../services/recipe-search.service';
import { RecipeHeader } from '../../models/recipe-header';

@Component({
  selector: 'recipe-search',
  templateUrl: './recipe-search.component.html',
  providers: [RecipeSearchService]
})
export class RecipeSearchComponent implements OnInit {
  recipes: Observable<RecipeHeader[]>;
  private searchTerms = new Subject<string>();
  constructor(    private recipeSearchService: RecipeSearchService,    private router: Router) {}

  search(term: string): void {
    console.log("term" + term);
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.recipes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.recipeSearchService.search(term)
        : Observable.of<RecipeHeader[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<RecipeHeader[]>([]);
      });
  }
  gotoDetail(recipe: RecipeHeader): void {
    let link = ['/recipe', recipe._id];
    this.router.navigate(link);
  }
}
