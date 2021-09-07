import { Component, Input } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'header',
  template: `
    <h2>There are {{ userCount }} users</h2>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HeaderComponent {
  userCount = 0;
  constructor(private service: AppService) {}

  ngOnInit() {
    this.service.users$.subscribe(users => {
      this.userCount = users.length;
    });
  }
}
