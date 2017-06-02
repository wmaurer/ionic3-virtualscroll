import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

interface Item {
    id: number;
    value: number;
}

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public items = this.createItems();

    constructor(public navCtrl: NavController) {
    }

    increment(item: Item) {
        this.items = this.items.map(i => i !== item ? i : { id: item.id, value: item.value + 1 });
    }

    createItems(): Item[] {
        const arraySize = 10000;
        const items = new Array(arraySize);
        for (var i = 0; i < 10000; i++) {
            items[i] = { id: i, value: 0 };
        }
        return items;
    }

    trackByFn(index, item: Item) {
        return item.id;
    }
}
