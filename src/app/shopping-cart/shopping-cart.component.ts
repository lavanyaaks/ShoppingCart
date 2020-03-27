import { Component, OnInit } from '@angular/core';
import { CartListService } from '../service/cartlist.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
 public cartflag:boolean= false;
 sortOption:string='price|htl';
	shopingList:any=[];	
	searchText:any=''
  constructor(private cart:CartListService) { 
  this.cart.getSearch().subscribe((res:any)=>{
  	this.searchText=res.text;
  	 })
  }

  ngOnInit() {
 	this.getShoping();
 	 this.ref();
  }
  
getShoping()
  {
 
  this.cart.getShopingList().subscribe((res:any)=>{
  this.shopingList=res;
  this.cart.setProduct(res)
  console.log(res);
  })
  }
  ref(){
    this.cartflag = false;
    setTimeout( () => {
        this.cartflag = true;
    }, 10 )
  }
  shortValue(val:string)
  {
  this.sortOption=val;
  }
}
