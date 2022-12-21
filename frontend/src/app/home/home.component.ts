import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list:any[]
  constructor(private api:ApiService,private toast:ToastrService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      console.log(params)
      const catid=params['catid']
      const search=params['search']
      if(catid)
        this.loadcatlist(catid)   
        else if(search)
        this.loadsearchresult(search)
        else
        this.loadData()
    })
  }

  loadsearchresult(search:string){
    this.api.searchproducts(search).subscribe({
      next:resp=>this.list=resp
    })
  }

  loadcatlist(catid:number){
    this.api.catproducts(catid).subscribe({
      next:resp=>this.list=resp
    })
  }

  addtowishlist(id:number){
    this.api.addtowishlist({customer:sessionStorage.getItem('id'),product:id})
    .subscribe({
      next:resp=>{
        this.toast.success('Item added to wishlist')
      },
      error:err=>this.toast.error(err.error)
      
    })
  }

  loadData(){    
    this.api.listproducts().subscribe({
      next:resp=>{
        this.list=resp;
      }
    })
  }

}
