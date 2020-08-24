import {Subject} from 'rxjs';
import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('banana', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index: number) {

    return this.ingredients[index];
  }

  addIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());

  }

  addIngredients(ings: Ingredient[]) {

    const copyOfIngs = ings.slice();

    // todo merging of a same product
    // for (const newIng of copyOfIngs) {
    //   console.log(newIng + ' <- current new product');
    //   for (const oldIng of this.ingredients) {
    //     console.log(oldIng + ' <- old product compared');
    //     if (this.compareNames(newIng, oldIng)) {
    //       console.log('found same crap, merged amounts');
    //       oldIng.amount = oldIng.amount + newIng.amount;
    //
    //       const index = copyOfIngs.indexOf(newIng);
    //       console.log('old ing:');
    //       console.log(copyOfIngs);
    //       copyOfIngs.splice(index, 1);
    //       console.log('removed ing:');
    //       console.log(copyOfIngs);
    //       break;
    //     }
    //   }
    // }
    this.ingredients.push(...copyOfIngs);
    this.ingredientsChanged.next(this.ingredients.slice());
  }


  // private compareNames(a: Ingredient, b: Ingredient) {
  //   return a.name.toLowerCase().replace(/ /g, '') === b.name.toLowerCase().replace(/ /g, '');
  // }

}
