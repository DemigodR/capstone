import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        if (data.user.userType == "normal") {
          this.router.navigate(['/dashboard']);
        }
        else {
          this.router.navigate(['/officer-dashboard']);
        }
      }
      else {
        window.scrollTo(0, 0);
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 4000 });
        this.router.navigate(['/login']);
      }
    });
  }
}
