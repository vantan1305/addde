import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddproductService } from 'src/app/services/addproduct.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public id= 0;
  public productsForm = new FormGroup({
    code: new FormControl(''),
    name: new FormControl(''),
    image: new FormControl(''),
    description: new FormControl(''),
    priceSale: new FormControl(''),
    sale: new FormControl(''),
    title:new FormControl('')
  });

  constructor(
              private common: CommonService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private addProductService: AddproductService
              ) { }

  ngOnInit(): void {}

  public addPro(): void{
    const newProduct = {};
    for(const controlName in this.productsForm.controls){
      if(controlName){
        newProduct[controlName] = this.productsForm.controls[controlName].value;
      }
    }
    this.addProductService.addProduct(newProduct).subscribe(data =>{
      console.log('Product Added', data);
      this.common.imcreamentProduct();
      this.productsForm.reset();
    })
  }

  public addProToList():void{
    const newProduct = {};
    for(const controlName in this.productsForm.controls){
      if(controlName){
        newProduct[controlName] = this.productsForm.controls[controlName].value;
      }
    }
    this.addProductService.addProduct(newProduct).subscribe(data =>{
      console.log('Product', data);
      this.router.navigate(['mgproduct']);
    })
  }

}
