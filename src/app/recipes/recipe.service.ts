import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();
    private recipes: Recipe[]=[
        new Recipe('Best Salad','Salad','https://www.cookingclassy.com/wp-content/uploads/2019/11/best-salad-7-768x1152.jpg',
        [new Ingredient('curry leaves',1),new Ingredient('pudina',20)]),
        new Recipe('Salsa','Salsa','https://www.cookingclassy.com/wp-content/uploads/2018/07/salsa-17.jpg',
        [new Ingredient('apple',1),new Ingredient('tomato',20)])
        
      ]; 



constructor(private slService:ShoppingListService){}
getRecipes(){
    return this.recipes.slice();
}

getRecipe(index:number){
    return this.recipes[index]
}

addIngredientsToShoppingList(ingredient:Ingredient[]){
    this.slService.addIngredients(ingredient)
}

}