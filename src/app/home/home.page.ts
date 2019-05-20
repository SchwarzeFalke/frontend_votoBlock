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
  constructor(public userService: UserService) {}

  LoginButton() {
    this.userService.login(this.electoral_key, this.pass).subscribe(
      data => {
        // Success
        console.log(data);
        //this.users = data['results'];
      },
      error => {
        console.error(error);
      }
    );
  }
}
