import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'; 
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL : String = environment.apiURL; 

  constructor(private httpClient : HttpClient) { }

  public getProducts() {
    return this.httpClient.get<Product[]>(this.apiURL + '/products'); 
    }

}
