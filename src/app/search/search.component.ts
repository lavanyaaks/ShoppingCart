import { Component, OnInit } from '@angular/core';
import { CartListService } from '../service/cartlist.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	searchText:string='';
  constructor(private cart:CartListService) { }

  ngOnInit(): void {
  this.search();
  }
  search()
  {
   this.cart.setSearch(this.searchText);
  }
}
