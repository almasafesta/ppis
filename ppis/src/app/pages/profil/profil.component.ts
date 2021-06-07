import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  profiles=[]
  profile={"imeiprezime": "",  "userName":"",  "email" : "",   "lozinka": "",  "datumRodjenja" : "",  "index" : "",   "jmbg" : "", 
  "odsjek" : "",  "adresa" : "" };
  constructor(private router:ActivatedRoute,private http:HttpClient){}
  profesor:string;
  student:string;

  ngOnInit(){     
    this.router.queryParams.subscribe(params=>{
      console.log("params",params);
      this.profesor = params.profesor;
      this.student = params.student;
      this.getProfiles();
    }) 
    
  }
  getProfiles() {
    this.http.get<any>('assets/profile.json')
      .subscribe(data => {
        this.profiles = data;
        this.profiles.map(i=>{
          if(i.userName==this.profesor || i.userName==this.student){
            this.profile=i;
          }
        })
       console.log(data);       
      });
  }
}