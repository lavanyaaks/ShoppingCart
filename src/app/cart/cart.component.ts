import { Component, OnInit } from '@angular/core';
import { CartListService } from '../service/cartlist.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
		totalPrice:any=0;
  constructor(public cart: CartListService) { 
	this.cart.getProductAll().subscribe((res:any)=>{
	  	console.log(res);
	  	this.cart.allItems=res;
	  	this.cart.listCartItems();
	  	})
  }

  ngOnInit() {
  this.cart.getShopingList().subscribe((res:any)=>{

  	this.cart.allItems = res;
    this.cart.setProduct(res);
  })
  }
  	changeQty(pid,qty,replace){
    if(qty !== ''){
      qty=parseInt(qty) || 1;
      this.cart.addToCart(pid,qty,replace);
    }else{
      this.cart.addToCart(pid,1,replace);
    }
    
    
  }
  removeItem(pid,qty,replace){
  		let val=1;
  		for(var i=0;i<=qty;i++)
  		{
  		this.cart.addToCart(pid,val,replace);
  		}
  		
  		
  		
  		}
  }

