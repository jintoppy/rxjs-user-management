import { Component, VERSION } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [];
  constructor(private service: AppService) {}
  addUser(val: string) {
    this.service.addUser(val);
  }

  ngOnInit() {
    this.service.users$.subscribe(users => {
      this.users = users;
    });
  }
}
