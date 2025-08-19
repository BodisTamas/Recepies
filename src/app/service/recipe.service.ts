import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Recipe } from '../model/recipe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private collectionName = 'recipes';

  constructor(private firestore: AngularFirestore) {}

  // Új recept hozzáadása
  addRecipe(recipe: Recipe) {
    return this.firestore.collection(this.collectionName).add(recipe);
  }

  // Összes recept lekérése
  getRecipes() {
    return this.firestore.collection(this.collectionName).valueChanges({ idField: 'id' });
  }

  // Recept frissítése
  updateRecipe(id: string, recipe: Recipe) {
    return this.firestore.collection(this.collectionName).doc(id).update(recipe);
  }

  // Recept törlése
  deleteRecipe(id: string) {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }
}
