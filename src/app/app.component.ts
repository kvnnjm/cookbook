import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category.service'
import { RecipeHeaderService } from './services/recipe-header.service'

import { Category } from './models/category'
import { RecipeHeader } from './models/recipe-header'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Recipe Categories';
  categories: Category[];
  selectedCategoryRecipes: RecipeHeader[];

  constructor(private categoryService: CategoryService, private recipeHeaderService: RecipeHeaderService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().then(categories => this.categories = categories);
  }

  private selectCategory(category: number): void {
      this.recipeHeaderService.getRecipeHeaders(category).then(recipesHeader => this.selectedCategoryRecipes = recipesHeader);
  }
}
