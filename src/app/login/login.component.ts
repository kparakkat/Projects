import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// export class LoginComponent implements OnInit {
//   public empid: string;
//   constructor(private router:Router) { }

//   ngOnInit() {
//   }

//   doLogin(): void{
//      this.router.navigateByUrl('/dashboard/'+ this.empid);
//   }

// }

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      empId: ['', Validators.required],
      empPwd: ['', Validators.required]
    });
  }

  loginValidate() {    
    const empId = this.loginForm.get('empId').value;    
    const empPwd = this.loginForm.get('empPwd').value;   
     if (empId !== null && empPwd !== null) {      
       this.router.navigate([`/dashboard/${empId}`]);    
      }  
    }
}
