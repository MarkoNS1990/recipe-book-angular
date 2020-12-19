import { Injectable,EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes:Recipe[] = [
    new Recipe('A test recipe',
    'This is a test','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
    [new Ingredient('Meat',1)
      ,new Ingredient('French Fries',3)
  ])
  ]

  constructor(private ShoppingListService: ShoppingListService) { }
  getRecipes(){
    return this.recipes.slice()
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.ShoppingListService.addIngredients(ingredients)
  }
}
