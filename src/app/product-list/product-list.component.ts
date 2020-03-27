import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { CartListService } from '../service/cartlist.service';
import{StorageService} from '../service/storage.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input("allProductList") __allprdts: any = {};
  @Output() refresh:EventEmitter<boolean> = new EventEmitter();
  @Input("searchedText") __searchedProduct: string='';
  @Input("sortingBy") sortByOption: string='';
  constructor(private cart:CartListService,
  public storage: StorageService
  ) { }

  ngOnInit() {
  this.sortByOption = 'price|htl';
  }
  addToCart(productId,productQty){    
    this.cart.allItems = this.__allprdts;
    this.cart.setProduct(this.__allprdts);
    this.cart.addToCart(productId,productQty,'');
    this.refresh.emit(true);
  }
 
}
