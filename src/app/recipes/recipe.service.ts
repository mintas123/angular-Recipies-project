import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Recipe} from './recipe.model';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  constructor(private slService: ShoppingListService) {
  }

  private recipes: Recipe[] = [
    new Recipe('Tasty spaghet',
      'Makes your knees weak and arms sweaty.',
      'https://cdn.aniastarmach.pl/content/uploads/2016/02/makaron-spaghetti-bolognese-1.jpg',
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

  getRecipeById(index: number) {
    return this.recipes[index];
  }


  addRecipesToSL(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());

  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
