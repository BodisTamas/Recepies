import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut } from '@angular/fire/auth';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  user: any;

  constructor(private auth: Auth) {
    // Figyeljük a bejelentkezett felhasználót
    this.auth.onAuthStateChanged(user => {
      this.user = user;
    });
  }

  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then((result) => {
        console.log('Sikeres bejelentkezés', result.user);
      })
      .catch((error) => {
        console.error('Hiba a bejelentkezés során', error);
      });
  }

  logout() {
    signOut(this.auth)
      .then(() => {
        console.log('Sikeres kijelentkezés');
      })
      .catch((error) => {
        console.error('Hiba a kijelentkezés során', error);
      });
  }
}
