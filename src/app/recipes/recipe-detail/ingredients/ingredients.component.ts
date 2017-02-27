import { Component, Input } from '@angular/core';
import { Ingredient } from '../../../models/ingredient'

@Component({
  selector: 'ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})

export class IngredientsComponent {

  @Input()
  ingredients: Ingredient[];
  @Input()
  editing: boolean;

  newIngredient: Ingredient  = new Ingredient();

  private removeIngredient(ingredient: Ingredient): void {
    this.ingredients = this.ingredients.filter((recipeIngredient: Ingredient) => recipeIngredient != ingredient);
  }

  private addIngredient() {
    this.ingredients.push(this.newIngredient);
  }
}
