import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

import { RecipeHeaderService } from '../../services/recipe-header.service'
import { RecipeService} from '../../services/recipe.service'
import { CategoryService } from '../../services/category.service'

import { RecipeHeader } from '../../models/recipe-header'
import { Category } from '../../models/category'

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  //styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent{

  title = 'Recipe Categories';
  categories: Category[];
  recipeHeaders : RecipeHeader[];

  constructor(private router: Router, private categoryService: CategoryService, private recipeHeaderService: RecipeHeaderService, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().then(categories => this.categories = categories);
  }

  private selectCategory(category: Category): void {
    this.recipeHeaderService.getRecipeHeaders(category._id).then(recipesHeader => this.recipeHeaders = recipesHeader);
  }

  private goDetails(recipe: RecipeHeader): void {
    this.router.navigate(['/recipe', recipe._id]);
  }

  private deleteRecipe(recipe: RecipeHeader, event: Event): void {
    event.stopPropagation();
    this.recipeHeaders = this.recipeHeaders.filter((recipeHeader : RecipeHeader) => recipeHeader != recipe);
    this.recipeService.removeRecipe(recipe._id);
  }

  private createRecipe(): void {
    this.router.navigate(['/recipe', '']);
  }
}
