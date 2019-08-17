import { Component, OnInit } from '@angular/core';

interface DaftarPersediaan {
  sku?,
  nama_barang?,
  satuan?,
  stok?,
  harga_jual?
}

@Component({
  selector: 'app-barang-persediaan',
  templateUrl: './barang-persediaan.component.html',
  styleUrls: ['./barang-persediaan.component.scss']
})
export class BarangPersediaanComponent implements OnInit {


  items: DaftarPersediaan[] = [];

  constructor() { }

  ngOnInit() {
  }

}
