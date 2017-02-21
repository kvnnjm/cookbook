import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category.service'
import { Category } from './models/category'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe List';
  categories : Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void{
      this.categoryService.getCategories().then(categories => this.categories = categories);
  }
}
