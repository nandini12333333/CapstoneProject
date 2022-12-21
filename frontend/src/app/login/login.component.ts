import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted=false;
  fg: FormGroup;
  post:any='';
  loginForm:FormGroup;
  constructor(
    private fb:FormBuilder,       // for the validation
    private api:ApiService,
    private _router:Router,
    private toast:ToastrService
    ) {
    this.createForm();
    this.loginForm=this.fb.group({
      'type':['']
    })
  }
  ngOnInit(): void {
  }
  createForm(){
    this.fg=this.fb.group({
      'userid':['',Validators.required],
      'pwd':['',Validators.required],
    })
  }
  validate(values:any){
    this.submitted=true;
    //console.log(this.fg.valid)
    if(this.fg.valid){
      console.log(values)
      this.api.validate(values).subscribe({
        next:resp=>{
        console.log(resp)
        this.toast.success('Welcome '+resp.data.name,"Login Successful")
        sessionStorage.setItem("id",resp.data.id)
        sessionStorage.setItem("userid",resp.data.userid)
        sessionStorage.setItem("uname",resp.data.name)
        sessionStorage.setItem("role","U")
          this._router.navigate(['profile'])
        },
      error:err=>{
        console.log(err)
        this.toast.error('Invalid userid or password',"Login Failed")
      }
    })
  }
  }
  validateadmin(values:any){
    this.submitted=true;
    //console.log(this.fg.valid)
    if(this.fg.valid){
      console.log(values)
      this.api.validateadmin(values).subscribe({
        next:resp=>{
        console.log(resp.data)
        this.toast.success('Welcome '+resp.data.uname,"Login Successful")
        sessionStorage.setItem("userid",resp.data.userid)
        sessionStorage.setItem("uname",resp.data.uname)
        sessionStorage.setItem("role","A")
          this._router.navigate(['dashboard'])
        },
      error:err=>{
        console.log(err)
        this.toast.error('Invalid userid or password',"Login Failed")
      }
    })
  }
  }
}



















