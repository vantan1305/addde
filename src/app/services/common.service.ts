import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public totalProduct = 0;
  public totalProduct$ = new BehaviorSubject<number>(0);

  constructor() { }

  public imcreamentProduct(){
    this.totalProduct++;
    this.totalProduct$.next(this.totalProduct);
  }

  public setTotalProduct(total: number){
    this.totalProduct = total;
    this.totalProduct$.next(total);
    console.log('total = ' + total);
  }

}
