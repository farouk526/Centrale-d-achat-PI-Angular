import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { OffreService } from 'app/Model/OffreService';

import { EcommerceService } from 'app/main/apps/ecommerce/ecommerce.service';

@Component({
  selector: 'app-ecommerce-checkout-item',
  templateUrl: './ecommerce-checkout-item.component.html',
  styleUrls: ['../ecommerce-checkout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EcommerceCheckoutItemComponent implements OnInit {
  // Input Decorator
  @Input() product;
  offreService :OffreService;
  quantity = 1;
  pricePerHour : number ;
  totalPrice : number= 0;
  /**
   * Constructor
   *
   * @param {EcommerceService} _ecommerceService
   */
  constructor(private _ecommerceService: EcommerceService) {}

  /**
   * Remove From Cart
   *
   * @param product
   */
  removeFromCart(product) {
    if (product.isInCart === true) {
      this._ecommerceService.removeFromCart(product.id).then(res => {
        product.isInCart = false;
      });
    }
  }

  /**
   * Toggle Wishlist
   *
   * @param product
   */
  toggleWishlist(product) {
    if (product.isInWishlist === true) {
      this._ecommerceService.removeFromWishlist(product.id).then(res => {
        product.isInWishlist = false;
      });
    } else {
      this._ecommerceService.addToWishlist(product.id).then(res => {
        product.isInWishlist = true;
      });
    }
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  ngOnInit(): void {
    this.pricePerHour  = this.offreService.prixparheure;
  
  }
 /**
   * Calculate Total Price
   */ 
  
 getTotalPrice(): number {
  return this.quantity * this.pricePerHour; 


  console.log(this.quantity * this.pricePerHour);
}

incrementQuantity(): void {
  this.quantity++;
}

decrementQuantity(): void {
  if (this.quantity > 1) {
    this.quantity--;
  }
  console.log("B");
}

  }

