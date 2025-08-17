// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RecipesComponent } from './recipes/recipes.component';
import { authGuard } from './auth.guard'; // Importáljuk a funkcionális guardot

export const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'recipes', component: RecipesComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];
