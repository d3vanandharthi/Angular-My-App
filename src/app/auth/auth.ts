import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  login(username: string, password: string): Observable<boolean> {
    
    // The "Database" check (Hardcoded for learning)
    if (username === 'admin' && password === '1234') {
        this.isLoggedIn = true;
        return of(true); // Success
    }
    
    // Failed Login
    this.isLoggedIn = false;
    return of(false); // Failed
  }

  logout() {
    this.isLoggedIn = false;
  }
}