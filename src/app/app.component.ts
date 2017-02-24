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
export class AppComponent  {
  title = 'Cookbook';
}
