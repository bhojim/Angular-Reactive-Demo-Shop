import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProductService } from '../shared/product.service';
import { ProductsCacheService } from '../shared/products-cache.service';

import { Product } from '../../models/product.model';
import { CartService } from '../../cart/shared/cart.service';
import { CartItem } from '../../cart/shared/cart-item.model';
import { Params } from '@angular/router/src/shared';
import { Rating } from '../../models/rating.model';
import { AuthService } from '../../account/shared/auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  activeImageUrl: string;
  activeImageIndex: number;
  selectedQuantity: number;
  @ViewChild('rating') rating: ElementRef;
  ratingCount: number;
  ratingValues: number[];
  selectedRating: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private productsCacheService: ProductsCacheService,
    private location: Location,
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.ratingValues = [1, 2, 3, 4, 5];
    this.selectedQuantity = 1;

    this.route.params.subscribe((params: Params) => {
      this.getProduct();
    });
  }

  getProduct(): void {
    // Show loading spinner
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe((product) => {
        console.log(product);
        this.product = product;
        this.activeImageUrl = this.product.imageURLs[0];
        this.activeImageIndex = 0;
        this.ratingCount = product.ratings ? Object.keys(product.ratings).length : 0;
        // Hide loading spinner
      });
    // TODO: fix cached variant
    // this.productsCacheService
    //   .get(id, this.productService.getProduct(id))
    //   .subscribe((product) => {
    //     this.product = product;
    //     this.activeImageUrl = this.product.imageURLs[0];
    //     this.activeImageIndex = 0;
    //     // Hide loading spinner
    //   });
  }

  onSelectThumbnail(event, index) {
    event.preventDefault();
    this.activeImageUrl = this.product.imageURLs[index];
    this.activeImageIndex = index;
  }

  onAddToCart() {
    this.cartService.addItem(new CartItem(this.product, this.selectedQuantity));
  }

  onSelectQuantity(event) {
    this.selectedQuantity = <number>+event.target.value;
  }

  onRate() {
    if (!this.authService.user) {
      return;
    }
    const rating = parseInt(this.selectedRating, 10);
    this.productService.rateProduct(this.product, rating);
  }
}
