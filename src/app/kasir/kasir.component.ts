import { Component, OnInit, ElementRef, ViewChild, OnChanges } from '@angular/core';

interface Items {
  produk?,
  qty?,
  harga?
}

@Component({
  selector: 'app-kasir',
  templateUrl: './kasir.component.html',
  styleUrls: ['./kasir.component.scss']
})
export class KasirComponent implements OnInit {
  @ViewChild('barcode', {static: true}) barcodeElement: ElementRef;

  items: Items[] = [];

  barcode;
  qtys         = [1,2,3,4,5,6];

  qty_selected = 1;

  constructor() { }

  ngOnInit() {
    this.setFocus()
  }

  setFocus() {
    this.barcodeElement.nativeElement.focus();
  }

  setQty(qty) {
    this.qty_selected = qty
    this.setFocus()
    return false;
  }

  rmItem(index) {

    let newItems = this.unset(index, this.items);
    this.items   = newItems;
    
  }

  barcodeChange(event) {
    let barcode = event.target.value;
    this.items.push({
      harga: 123123,
      produk: barcode,
      qty: this.qty_selected
    });
    
    this.barcodeElement.nativeElement.value = ''
  }

  unset(index, array) {

    let i   = 0;
    let tmp = []
    for(let key in array) {
      if(key != index) {
        tmp.push(array[key]);
      }
    }

    return tmp;
  }
}
