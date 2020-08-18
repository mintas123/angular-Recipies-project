import {Recipe} from './recipe.model';
import { EventEmitter} from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Some recipe', 'this is a test recipe. It is a part with a description, some additional information about your recipe.', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg'),
    new Recipe('Other recipe', 'Need some more tedsting, but overall seems cool.', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
