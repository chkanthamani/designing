import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable'
import { Product } from './empproduct';
@Injectable({
  providedIn: 'root'
})
export class ScreenService {
private _url:string = "/assets/data/product.json"
  constructor(private http: HttpClient) { }
  getproduct():Observable<Product[]>{
    return this.http.get<Product[]>(this._url)
  }
}
