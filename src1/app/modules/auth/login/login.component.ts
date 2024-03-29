import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private router: Router,
    private dataService: DataService,
  ) { }

  get username(): AbstractControl {
    return <AbstractControl>this.loginForm.get('username');
  }

  get password(): AbstractControl {
    return <AbstractControl>this.loginForm.get('password');
  }

  ngOnInit() {
  }

  public login(): void {
    console.log(this.loginForm.value);
    this.dataService.changeUserData(this.loginForm.value);
    localStorage.setItem('Role', 'Admin');
    this.router.navigate(['/clients']);
  }

}
