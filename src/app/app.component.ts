import { Component } from '@angular/core';
import { IProduct } from './components/models/iproduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	count: number = 0;
	sum: number = 0;

	cartList: IProduct[] = [];

	productList: IProduct[] = [
		{id: 1, name: 'Basketball', image: 'assets/images/basketball.png', price: 45, quantity: 0},
		{id: 2, name: 'Playstation 4', image: 'assets/images/playstation 4.png', price: 1800, quantity: 0},
		{id: 3, name: 'Xbox One', image: 'assets/images/xbox.png', price: 1700, quantity: 0},
		{id: 4, name: 'Laptop', image: 'assets/images/laptop.png', price: 1500, quantity: 0},
		{id: 5, name: 'Wallet', image: 'assets/images/wallet.png', price: 240, quantity: 0},
		{id: 6, name: 'Oneplus 5t', image: 'assets/images/oneplus.png', price: 1600, quantity: 0}
	]



	cart (index: number):number {
		if (!this.cartList.includes(this.productList[index])) {
			this.cartList.push(this.productList[index]);
			console.log(this.cartList);
		}
		this.amount(index);
		return this.count++;
	}

	amount (i: number): number {
		this.sum += this.productList[i].price;
		return this.sum;
	}

	showAndHide (): void {
		document.querySelector('#cartList').classList.toggle('hideShow');
	}

}