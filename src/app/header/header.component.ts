import { Component, OnInit } from '@angular/core';
import { CartListService } from '../service/cartlist.service';
import{StorageService} from '../service/storage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	 public cartData: any  = [];  
  constructor(public cart: CartListService,public storage: StorageService) { 
  	this.cart.getProductAll().subscribe((res:any)=>{
  	this.cart.allItems=res;
  	this.cart.listCartItems();
  	})
  }

  ngOnInit() {
  }
  
}
