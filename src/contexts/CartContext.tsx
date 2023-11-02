import {createContext, ReactNode, useReducer} from "react";
import {CartItem, cartReducer} from "@/reducers/Cart/reducer.ts";
import {
    addToCartAction,
    removeFromCartAction,
    updateQuantityAction,
    setCheckoutDataAction,
    cleanCartAction
} from "@/reducers/Cart/actions.ts";
import {checkoutForm} from "@/pages/Checkout/CheckoutFormConfig.ts";


interface CartContextType {
    items: CartItem[],
    checkoutData?: checkoutForm,
    addItem: (coffeeId: number, quantity: number) => void,
    removeItem: (id: number) => void,
    updateQuantity: (coffeeId: number, quantity: number) => void,
    setCheckoutData: (data: checkoutForm) => void,
    cleanCart: () => void
}

export const CartContext = createContext({} as CartContextType);

interface CartProviderProps {
    children: ReactNode
}

export function CartContextProvider({children}: CartProviderProps) {

    const [cartState, dispatch] = useReducer(cartReducer, {
        items: []
    });

    const {items, checkoutData} = cartState;

    function addItem(coffeeId: number, quantity: number) {
        dispatch(addToCartAction(coffeeId, quantity))
    }

    function removeItem(coffeeId: number) {
        dispatch(removeFromCartAction(coffeeId))
    }

    function updateQuantity(coffeeId: number, quantity: number) {
        dispatch(updateQuantityAction(coffeeId, quantity))
    }

    const setCheckoutData = (data: checkoutForm) => {
        dispatch(setCheckoutDataAction(data));
    }

    const cleanCart = () => {
        dispatch(cleanCartAction());
    }

    return (
        <CartContext.Provider value={{items, addItem, removeItem, updateQuantity, setCheckoutData, checkoutData, cleanCart}}>
            {children}
        </CartContext.Provider>
    )
}
