import { Component } from '@angular/core';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  electoral_key = '';
  pass = '';
  user = [];
  constructor(public userService: UserService) {}

  LoginButton() {
    this.userService.Login(this.electoral_key, this.pass).subscribe(data => {
      console.log(JSON.stringify(data));
    });
  }
}
