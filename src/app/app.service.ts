import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  users$: BehaviorSubject<string[]> = new BehaviorSubject([]);
  private _users = [];

  addUser(user: string) {
    this._users.push(user);
    this.users$.next(this._users);
  }
}
