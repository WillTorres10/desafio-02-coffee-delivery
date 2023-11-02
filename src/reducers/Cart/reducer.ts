import {CartActionTypes} from "@/reducers/Cart/actions.ts";
import {produce} from "immer";
import {checkoutForm} from "@/pages/Checkout/CheckoutFormConfig.ts";

export interface CoffeeCatalogItem {
  id: number;
  name: string;
  tags: string[];
  description: string;
  price: number;
  image: string;
}

export interface CartItem {
  coffeeId: number,
  quantity: number
}

export interface CartState {
  items: CartItem[];
  checkoutData?: checkoutForm;
}

interface Action {
  type: string;
  payload?: any;
}

export function cartReducer(state: CartState, action: Action) {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        const idx = draft.items.findIndex(item => item.coffeeId === action.payload.coffeeId);
        if (idx === -1) {
          draft.items.push({
            coffeeId: action.payload.coffeeId,
            quantity: action.payload.quantity
          })
        } else {
          draft.items[idx].quantity += action.payload.quantity
        }
      })
    case CartActionTypes.REMOVE_FROM_CART:
      return produce(state, (draft) => {
        draft.items = draft.items.filter(item => item.coffeeId !== action.payload.coffeeId)
      })
    case CartActionTypes.UPDATE_QUANTITY:
      return produce(state, (draft) => {
        if (action.payload.quantity >= 1) {
          const idx = draft.items.findIndex((item: CartItem) => item.coffeeId === action.payload.coffeeId)
          draft.items[idx].quantity = action.payload.quantity
        }
      });
    case CartActionTypes.SET_CHECKOUT_DATA:
      return produce(state, (draft) => {
        draft.checkoutData = action.payload.data;
      });
    case CartActionTypes.CLEAN_CART:
      return produce(state, (draft) => {
        draft.items = [];
      });
    default:
      return state;
  }
}
