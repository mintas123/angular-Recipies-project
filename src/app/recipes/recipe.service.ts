import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  constructor(private slService: ShoppingListService) {
  }

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty spaghet',
      'Makes your knees weak and arms sweaty.',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Pasta', 1),
        new Ingredient('Tomato Sauce', 1),
      ]
      ),
    new Recipe('Awesome schnitzel',
      'You will crave it for days.',
      'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Fries', 40),
        new Ingredient('Lemon', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }


  addRecipesToSL(ingredients: Ingredient[]){
      this.slService.addIngredients(ingredients);
  }
}
