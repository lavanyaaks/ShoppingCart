import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
selectedItem:string='price|htl';
@Output() sortList:EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  getSort(val:string)
  {
  		this.selectedItem=val;
  		 this.sortList.emit(this.selectedItem);
  }	
}
