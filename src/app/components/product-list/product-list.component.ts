import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../components/models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
	count: number = 0;

	@Input()
	products: IProduct[]

	@Output() 
	productListMessenger: EventEmitter<number> = new EventEmitter();

	public counter(index: number): void {
		// console.log(index);
		// this.count += index/index;
		this.productListMessenger.emit(index);
	}
}