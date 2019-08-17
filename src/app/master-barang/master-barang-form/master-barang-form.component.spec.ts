import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterBarangFormComponent } from './master-barang-form.component';

describe('MasterBarangFormComponent', () => {
  let component: MasterBarangFormComponent;
  let fixture: ComponentFixture<MasterBarangFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterBarangFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterBarangFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
