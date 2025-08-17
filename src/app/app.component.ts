// src/app/app.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router'; // <-- Importáld a RouterOutlet-et és a RouterLink-et

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink], // <-- Add hozzá az imports tömbhöz
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-receptek';
}
