import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { StorageService } from './storage.service';
@Injectable({
  providedIn:'root'
})
export class CartListService{
    searchSubject = new Subject<any>();
    allProduct=new Subject<any>();
	url:any="https://api.myjson.com/bins/qzuzi";
    public allItems: any  = {};  
  public cartData: any  = [];  
  public cartItemsList: any  = {};  
  public totalAmmout:any=0;
  public cartTotal: any  = 0;
  public cartDiscount:any=0;  
  public cartItemsStorageName = 'mycart';
	 constructor(
	 private http: HttpClient,
      public storage: StorageService
       
    ) 
    {

        this.loadCart();
    }
    getShopingList()
    {
    return this.http.get(this.url);
    }
    setSearch(val:string)
    {
        this.searchSubject.next({"text": val })
    }
    getSearch()
    {
     return this.searchSubject.asObservable();
    }
    setProduct(item:any)
    {
        this.allProduct.next(item);
      }
      getProductAll()
      {
      return this.allProduct.asObservable();
      }
   loadCart(){
    let temp = this.storage.get('mycart'); 
    if(temp === undefined || temp ==='' || temp === null){
      this.cartData = {}; 
    }else{
      this.cartData = temp; 
    }
    console.log(this.cartData);
  }

  addToCart(pid,qty,replace){
   
    if(this.cartData[pid] == undefined){
      this.cartData[pid] = 0;
    }
    if(replace===''){
      this.cartData[pid] =  this.cartData[pid] + qty;
    }else{
      this.cartData[pid] =  parseInt(qty);
    }
    
    if(this.cartData[pid]==0){
      delete this.cartData[pid];
    }
    this.storeItems();
  }

  storeItems(){
    this.storage.set({
      'mycart' : this.cartData
    });
    this.listCartItems();
  }
  
  listCartItems(){
    let tempCart = [];
    let getActualItems = Object.keys(this.cartData);
    console.log(getActualItems);
    let cartDataItems = this.cartData;
    let tempTotal = 0;
    let tempDiscount=0;    
    var onlyChoosenItems = (this.allItems).filter(function(item) {
      if(getActualItems.indexOf(String(item.id)) !== -1 ){
        tempCart.push({
          pid:  item.id,
          name:  item.name,
          qty:  cartDataItems[item.id],
          discount:item.discount,
          category:item.category,
          price:  item.price*cartDataItems[item.id],
          pr:item.price,
          img_url:item.img_url
        });  
        tempTotal += item.price*cartDataItems[item.id];
        tempDiscount+=(item.price*cartDataItems[item.id]*item.discount/100); 
      }
    });

    
    this.cartItemsList = tempCart;
    this.cartTotal = tempTotal;
    this.cartDiscount=tempDiscount;
    this.totalAmmout=this.cartTotal-this.cartDiscount;
    console.log(this.cartItemsList);
  }

  loadCheckoutInfo(storageKey: string){
    return this.storage.get(storageKey)
  }

  emptyCart(){
    this.storage.set({
      mycart:{}
    })
  }
removeToCart(pid,qty,replace)

   {

        delete this.cartData[pid];

         this.storeItems();

   }


}