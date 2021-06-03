import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgproductComponent } from './mgproduct.component';

describe('MgproductComponent', () => {
  let component: MgproductComponent;
  let fixture: ComponentFixture<MgproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MgproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MgproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
