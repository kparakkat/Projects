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
     console.log(empId);    
     console.log(empPwd);    
     if (empId !== null && empPwd !== null) {      
       console.log(empId);      
       console.log(empPwd);      
       this.router.navigate([`/dashboard/:${empId}`]);    
      }  
    }

  // submitForm(): void {
  //   console.log(this.loginForm);
  // }

}
