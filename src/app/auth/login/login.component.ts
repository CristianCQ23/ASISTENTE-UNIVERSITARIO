import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 public formLogin!: FormGroup;

 email: string = "Cris1@gmail.com";
 pass: string = "Cris*"

 islogin: boolean = true;

 constructor(
  private fb: FormBuilder,
  private router: Router
 ) { } 
  
  ngOnInit(): void {
    sessionStorage.removeItem('login');
    this.formInit();
   
  }
//Metodo para inicializar el formulario
  formInit(){
    this.formLogin = this.fb.group({
      email: [''],
      password: ['']
    });
  }


  //Metodo mara iniciar sesion
  iniciarSesion(){
    const data = this.formLogin.value;

    if (data.email !== this.email || data.password !== this.pass) {
     this.islogin = false;

     setTimeout(() => {
      this.islogin = true;
     }, 2000);
    }
    else{
      sessionStorage.setItem('login', 'true');
      setTimeout(() => {
      this.router.navigate(["/pages/dashboard"])
    },2000);
    }
  }
}
