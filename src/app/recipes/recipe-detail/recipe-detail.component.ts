import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { RecipeService } from '../../services/recipe.service'
import { CategoryService } from '../../services/category.service'

import { Recipe } from '../../models/recipe'
import { Category } from '../../models/category'
import { Ingredient } from '../../models/ingredient'

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  // styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  categories: Category[];
  newComment: string;
  editing: boolean;
  new: boolean;

  constructor(private recipeService: RecipeService, private categoryService: CategoryService, private route: ActivatedRoute, private location: Location) {
    this.recipe = new Recipe();
    this.editing = false;
    this.new = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.recipeService.getRecipe(params['id']).then(recipe => this.recipe = recipe);
      } else {
        this.editing = true;
        this.new = true;
      }
    });
    this.categoryService.getCategories().then(categories => this.categories = categories);
  }

  private goBack(): void {
    this.location.back();
  }

  private edit(): void {
    this.editing = true;
  }

  private save(): void {
    if (this.new) {
      this.recipeService.createRecipe(this.recipe);
    } else {
      this.recipeService.saveRecipe(this.recipe);
    }
    this.editing = false;
  }

  private leaveComment() {
    this.recipe.comments.push(this.newComment);

    //temporal
    this.save()
  }
}
