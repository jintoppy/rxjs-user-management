import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  users$: BehaviorSubject<string[]> = new BehaviorSubject(
    this.getStoredValue()
  );

  getStoredValue() {
    let userStored = localStorage.getItem('users');
    return userStored ? JSON.parse(userStored) : [];
  }

  saveToStorage(users) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  addUser(user: string) {
    let users = this.getStoredValue();
    users.push(user);
    this.saveToStorage(users);
    this.users$.next(users);
  }
}
