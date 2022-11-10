import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']


})
export class ProductComponent implements OnInit {
  public products! : Product[]; 

  constructor(private productService : ProductService) { }
    

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      console.log(products); 
     });
  }
}

