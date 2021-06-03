import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError} from 'rxjs/operators';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddproductService {

  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'may-auth-token'
    }),
  };

  private REST_API_SERVER = 'http://localhost:8082/itsol/products';

  constructor(private http: HttpClient) { }


  public getAllProducct2() : Observable<any>{
    return this.http.get(`${this.REST_API_SERVER}/all`, {observe: 'body'})
    .pipe(catchError(err => throwError(err)));
  }

  public getAllProducct() : Observable<any>{
    return this.http.get(`${this.REST_API_SERVER}/all`)
    // .pipe(catchError(err => throwError(err)));
  }
  public addProduct(data: any){
    const url = `${this.REST_API_SERVER}/addProduct`;
    return  this.http
    .post<any>(url, data, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  public deleteProduct(productId: number){
    const url = `${this.REST_API_SERVER}/` + productId;
    return this.http
    .delete<any>(url)
    .pipe(catchError(this.handleError));
  }

  public editProduct(productId: number){

  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
