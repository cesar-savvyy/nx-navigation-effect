import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductsEffects } from './+state/products.effects';
import { ProductsFacade } from './+state/products.facade';
import * as fromProducts from './+state/products.reducer';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromProducts.PRODUCTS_FEATURE_KEY,
      fromProducts.reducer
    ),
    EffectsModule.forFeature([ProductsEffects]),
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ProductsComponent
      }
    ])
  ],
  providers: [ProductsFacade],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
