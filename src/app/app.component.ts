import { Component } from '@angular/core';

class Item {
	purchase: string;
	price: number;
	done: boolean;

	constructor(purchase: string, price: number) {
		this.done = false;
		this.price = price;
		this.purchase = purchase;
	}
}

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	text: string;
	price: number = 0;
	page_head: string = "СПИСОК ПОКУПОК";
	count: number = 0;
	isDay: boolean = false;

	items: Item[] =
		[
			{ purchase: "Хлеб", done: false, price: 16.89 },
			{ purchase: "Масло", done: true, price: 30 }
		]

	addItem(text: string, price: number): void {
		if (text == null || text.trim() == "" || price == null)
			return;
		this.items.push(new Item(text, price));
	}

	clicks($event: any): void {
		this.count++;
	}
}