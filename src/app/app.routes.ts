// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { authGuard } from './auth.guard'; // Importáljuk a funkcionális guardot
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, canActivate: [authGuard] },
  { path: 'recipe-list', component: RecipeListComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];
