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
  users=[{name:'admin',password:'admin'},{name:'iosmankovi1',password:'123'}]
  constructor(private router:Router,public toaster:ToastrService ){

  }
  ngOnInit(){
    console.log('login',this.user);
    
  }
  login(){
    console.log("hdhd",this.user);
    this.users.map(i=>{
      if(i.name===this.user.name &&  i.password===this.user.password){
        this.router.navigate(['/home'], {
          queryParams: { profesor: this.user.name==='admin'? this.user.name:null,
          student:this.user.name!='admin'?this.user.name:null}
       });
      }
    })
    // this.toaster.error('Wrong username or password!');
    this.user={name:'',password:''};
  }
  cancel(){
    this.user={name:'',password:''};
  }
}