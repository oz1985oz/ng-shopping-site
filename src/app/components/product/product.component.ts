import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../components/models/iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
	@Input()
	product: IProduct

	@Input()
	index: number

	@Output()
	productMessenger: EventEmitter<number> = new EventEmitter();

	counter(e): void {
		this.product.quantity++
		console.log(e)
		console.log(this.index)
		this.productMessenger.emit(this.index);
	}
}
