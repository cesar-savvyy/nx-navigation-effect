import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch, navigation } from '@nrwl/angular';
import { ProductsComponent } from '../products/products.component';
import * as ProductsActions from './products.actions';


@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      fetch({
        run: action => {
          console.log('loaded products')
          // Your custom service 'load' logic goes here. For now just return a success action...
          return ProductsActions.loadProductsSuccess({ products: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return ProductsActions.loadProductsFailure({ error });
        }
      })
    )
  );

  products$ = createEffect(() =>
    this.actions$.pipe(
      navigation(ProductsComponent, {
        run: action => {
          console.log('navigation: load products')
          return ProductsActions.loadProducts();
        },

        onError: (action, error) => {
          console.error('Error', error);
        }
      })
    )
  );

  constructor(private actions$: Actions) { }
}
