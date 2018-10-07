import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      userpwd: ['', Validators.required]
    });

  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if(this.loginForm.controls.username.value == 'dhiraj@gmail.com' && this.loginForm.controls.userpwd.value == 'password') {
        this.router.navigate(['/home']);
    }else {
      this.invalidLogin = true;
    }
  }


}
