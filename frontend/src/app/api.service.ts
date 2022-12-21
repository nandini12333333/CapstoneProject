import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASEURL:string="http://localhost:8082/api/";
  PRODUCTBASEURL:string="http://localhost:8083/api/";
  CARTBASEURL:string="http://localhost:8084/api/";
  AUTHENTICATIONURL:string="http://localhost:1991/api";

  constructor(private http:HttpClient) { }

  validate(data:any){
    return this.http.post<any>(this.BASEURL+"customers/validate",data);
  }

  validateadmin(data:any){
    return this.http.post<any>(this.BASEURL+"admin/validate",data);
  }

  //categories
  savecategory(data:any){
    return this.http.post<any>(this.PRODUCTBASEURL+"categories",data);
  }

  listcategories(){
    return this.http.get<any[]>(this.PRODUCTBASEURL+"categories");
  }

  deletecategory(id:number){
    return this.http.delete<any>(this.PRODUCTBASEURL+"categories/"+id)
  }

  //customer
  register(data:any){
    return this.http.post<any>(this.BASEURL+"customers",data);
  }

  listcustomers(){
    return this.http.get<any[]>(this.BASEURL+"customers")
  }

  getcustomerdetails(id:any){
    return this.http.get<any>(this.BASEURL+"customers/"+id)
  }

  //products
  saveproduct(data:any){
    new HttpHeaders().set("Accept", "application/json");
    return this.http.post<any>(this.PRODUCTBASEURL+"products",data)
  }

  listproducts(){
    return this.http.get<any[]>(this.PRODUCTBASEURL+"products")
  }

  catproducts(catid:number){
    return this.http.get<any[]>(this.PRODUCTBASEURL+"products/cats?catid="+catid)
  }

  searchproducts(search:string){
    return this.http.get<any[]>(this.PRODUCTBASEURL+"products?search="+search)
  }

  deleteproduct(id:number){
    return this.http.delete<any>(this.PRODUCTBASEURL+"products/"+id)
  }

  //wishlist
  addtowishlist(data:any){
    return this.http.post<any>(this.CARTBASEURL+"wishlist",data)
  }

  getwishlist(id:any){
    return this.http.get<any[]>(this.CARTBASEURL+"wishlist?custid="+id)
  }

  deletefromwishlist(id:any){
    return this.http.delete<any>(this.CARTBASEURL+"wishlist/"+id)
  }
}
