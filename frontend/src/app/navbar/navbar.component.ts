import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  role=sessionStorage.getItem("role")
  cats:any[]
  search:string
  constructor(private _router:Router,private api:ApiService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("role",this.role)
    this.api.listcategories().subscribe({
      next:resp=>this.cats=resp,
      error:err=>console.log(err.error)
    })
    this.route.queryParams.subscribe(p=>this.search=p['search'])
  }

  logout(){
    sessionStorage.clear();
   this._router.navigate(['/'])
  }

}
