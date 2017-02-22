import { Component, OnInit, Input } from '@angular/core';
import { RecipeHeaderService } from '../../services/recipe-header.service'
import { RecipeHeader } from '../../models/recipe-header'

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  //styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent{

  @Input()
  recipes : RecipeHeader[];

}
