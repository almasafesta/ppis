import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user={name:'',password:''};
  users=[]
  constructor(private router:Router,public toaster:ToastrService,private http:HttpClient ){

  }
  ngOnInit(){
    console.log('login',this.user);
    this.getUsers();
  }
  login(){
    console.log("hdhd",this.user);
    this.users.map(i=>{
      if(i.userName===this.user.name &&  i.lozinka===this.user.password){
        this.router.navigate(['/home'], {
          queryParams: { profesor: i.rola==='profesor'? this.user.name:null,
          student: i.rola=='student'?this.user.name:null,
          admin:i.rola=='admin'?this.user.name:null}
       });
      }
    })
    // this.toaster.error('Wrong username or password!');
    this.user={name:'',password:''};
  }
  cancel(){
    this.user={name:'',password:''};
  }
  getUsers(){
    this.http.get<any>('assets/profile.json')
    .subscribe(data => {
      this.users = data;
    });
  }
}