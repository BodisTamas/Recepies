// src/app/recipes/recipes.component.ts

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, doc, addDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes$!: Observable<any[]>;
  newRecipeTitle: string = '';

  constructor(private firestore: Firestore, private router: Router) {}

  ngOnInit() {
    const recipeCollection = collection(this.firestore, 'recipes');
    this.recipes$ = collectionData(recipeCollection, { idField: 'id' });
  }

  addRecipe() {
    if (this.newRecipeTitle) {
      const recipeCollection = collection(this.firestore, 'recipes');
      addDoc(recipeCollection, { title: this.newRecipeTitle, timestamp: new Date() })
        .then(() => {
          this.newRecipeTitle = '';
        })
        .catch(err => console.error(err));
    }
  }

  deleteRecipe(id: string) {
    const recipeDoc = doc(this.firestore, `recipes/${id}`);
    deleteDoc(recipeDoc)
      .catch(err => console.error(err));
  }

  back(){
    this.router.navigate(['']);
  }
}
