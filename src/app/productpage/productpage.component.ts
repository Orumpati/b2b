import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  title = 'ecommerce-product-page';
  mobile: boolean = false;
  showMenu: boolean = false;
  showLightbox: boolean = false;
  showCart: boolean = false;
  selectedItem: number = 1;
  addItems: number = 0;
  totalInCart: number = 0;

  cartItemList:any=[]
  public productList=new BehaviorSubject<any>([])
  public totalItem :number = 0
  constructor() { }

  ngOnInit(): void {
   this.getProduct().subscribe(res=>{
    this.totalItem =res.length
   }) 
  }

  getProduct(){
    return this.productList.asObservable()
  }

addtocart(product:any){
 this.cartItemList.push(product)
 this.productList.next(this.cartItemList)
 this.getTotalPrice();
 console.log(this.cartItemList)
}

getTotalPrice(){
let grandTotal =0;
this.cartItemList.map((a:any)=>{
  grandTotal += a.total;
})
return grandTotal;
}

}
