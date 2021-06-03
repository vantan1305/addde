import { RouterTestingModule } from '@angular/router/testing';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddproductService } from '../../services/addproduct.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-mgproduct',
  templateUrl: './mgproduct.component.html',
  styleUrls: ['./mgproduct.component.scss']
})
export class MgproductComponent implements OnInit {
  public productsList: any[] = [];


  constructor(
    private addProductservice: AddproductService,
    private router: Router,
    private route: ActivatedRoute,
    private common: CommonService
  ) { }

  ngOnInit(): void {
    this.LoadProduct();
  }


  public LoadProduct(): void{
    this.addProductservice.getAllProducct().subscribe(
      (data) =>{
        console.log(data);
        this.productsList= data;
        this.common.setTotalProduct(data.length);
      });
  }

  public addProduct(){
    this.router.navigate(['products-form', 0]);
  }

  public deleteProductById(productId: number){
    this.addProductservice.deleteProduct(productId).subscribe((data)=>{
      console.log(data);
    });
    this.LoadProduct();
  }

  public editProduct(productId: number){
    this.router.navigate(['products-form', productId]);
  }

}
