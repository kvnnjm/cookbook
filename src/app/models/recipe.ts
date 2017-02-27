import { Ingredient } from './ingredient'

export class Recipe {
  _id: string;
  name: string;
  category: string;
  chef: string;
  ingredients: Ingredient[];
  description: string;
  comments: string[];
  ranksum: number;
  rankcount: number;
  imageulr: string;
}
