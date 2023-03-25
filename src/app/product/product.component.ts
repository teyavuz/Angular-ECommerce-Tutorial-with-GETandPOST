import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { Product } from 'src/app/product/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute:ActivatedRoute
  ) {}

  title = 'Ürün Listesi';
  filterText = '';
  products!: Product[];
  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
     this.productService.getProducts(params["productID"]).subscribe(data=>{this.products =data})

   })
  }

  addToCart(product: any) {
    this.alertifyService.success(product.productName + ' Sepete Eklendi');
  }
}
