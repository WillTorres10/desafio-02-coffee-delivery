import {checkoutForm} from "@/pages/Checkout/CheckoutFormConfig.ts";

export enum CartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  UPDATE_QUANTITY = 'UPDATE_QUANTITY',
  SET_CHECKOUT_DATA = 'SET_CHECKOUT_DATA',
  CLEAN_CART = 'CLEAN_CART',
}

export function addToCartAction(coffeeId: number, quantity: number) {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload:{
      coffeeId,
      quantity
    }
  }
}

export function removeFromCartAction(coffeeId: number) {
  return {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload:{
      coffeeId
    }
  }
}

export function updateQuantityAction(coffeeId: number, quantity: number) {
  return {
    type: CartActionTypes.UPDATE_QUANTITY,
    payload:{
      coffeeId,
      quantity
    }
  }
}

export function setCheckoutDataAction(data: checkoutForm) {
  return {
    type: CartActionTypes.SET_CHECKOUT_DATA,
    payload:{
      data
    }
  }
}

export function cleanCartAction() {
  return {
    type: CartActionTypes.CLEAN_CART
  }
}
