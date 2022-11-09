import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
cartItemList:any=[]
public productList=new BehaviorSubject<any>([])

  constructor() { }

  ngOnInit(): void {
  }

  /*removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id ===a.id){
        this.cartItemList.splice(index,1)
      }
    })
    this.productList.next(this.cartItemList)

  }*/
  getTotalPrice(){
    let grandTotal =0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
    }

  removeAllCart(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList)
  }
}
