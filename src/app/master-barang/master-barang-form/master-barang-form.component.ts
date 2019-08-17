import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-master-barang-form',
  templateUrl: './master-barang-form.component.html',
  styleUrls: ['./master-barang-form.component.scss']
})
export class MasterBarangFormComponent implements OnInit {

  form = new FormGroup({
    nama_barang: new FormControl(''),
    satuan: new FormControl(''),
    kode_barang: new FormControl('')
  })

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    let obj = this.form.value;
    let form_data = new FormData();

    for(let key in obj) {
      form_data.append(key, obj[key]);
    }
    


    this.router.navigateByUrl('master-barang');
  }

}
