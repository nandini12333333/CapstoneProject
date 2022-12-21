import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  fg:FormGroup;
  model:any={}
  cats:any[]
  list:any[]
  filePath="../assets/saree.jpg"
  image:any
  submitted=false;
  upload=false;
  constructor(private api:ApiService,
    private fb:FormBuilder,
    private toast:ToastrService) { }

  ngOnInit(): void {
    this.createForm()
    this.loadData()
  }

  loadData(){
    this.api.listcategories().subscribe({
      next:resp=>this.cats=resp
    })
    this.api.listproducts().subscribe({
      next:resp=>{
        this.list=resp;
      }
    })
  }

  createForm(){
     this.fg=this.fb.group({
      'pname':['',Validators.required],
      'category':['',Validators.required],
      'descr':['',Validators.required],
      'photo':['',Validators.required],
      'pic':['',Validators.required],
      'id':['0',Validators.required],
      'price':['',Validators.required],
    })
  }

   deleteProduct(id:number){
    this.api.deleteproduct(id).subscribe({
      next:resp=>{
        this.toast.success('Product deleted')
        this.loadData()
      },
      error:err=>this.toast.error('Product cannot delete')
    })
  }

  saveproduct(form:FormGroup){  
    
      this.api.saveproduct(form).subscribe({
        next:resp=>{              
        this.toast.success("Product saved successfully")      
        this.fg.reset()
        this.submitted=false;
        this.loadData()
        },
        error:err=>console.log(err.error)
      });
    }
  }
