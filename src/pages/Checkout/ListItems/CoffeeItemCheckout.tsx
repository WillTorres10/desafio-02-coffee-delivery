import {CoffeeCatalogItem} from "@/reducers/Cart/reducer.ts";
import {useContext} from "react";
import {CartContext} from "@/contexts/CartContext.tsx";
import {CounterInput} from "@/components/CounterInput";
import {Trash} from "phosphor-react";
import {
  ItemCartCheckout,
  ItemCartCheckoutActions,
  ItemCartCheckoutRemove,
  ItemCartCheckoutUnityPrice
} from "@/pages/Checkout/ListItems/styles.ts";
import {defaultTheme} from "@/styles/themes/default.ts";

interface CoffeeItemCheckoutProps {
  coffee: CoffeeCatalogItem,
  quantity: number
}

export function CoffeeItemCheckout({coffee, quantity}: CoffeeItemCheckoutProps) {
  const {updateQuantity, removeItem} = useContext(CartContext);

  const handleAddQuantity = () => {
    updateQuantity(coffee.id, quantity + 1);
  }

  const handleRemoveQuantity = () => {
    if ((quantity - 1) >= 1){
      updateQuantity(coffee.id, quantity - 1);
    }
  }

  const handleRemoveItem = () => {
    removeItem(coffee.id);
  }

  return (
    <ItemCartCheckout >
      <img src={coffee.image} alt={coffee.name} />
      <div>
        <div>{coffee.name}</div>
        <ItemCartCheckoutActions>
          <CounterInput number={quantity} addHandler={handleAddQuantity} lessHandler={handleRemoveQuantity} />
          <ItemCartCheckoutRemove onClick={handleRemoveItem}>
            <Trash size={16} color={defaultTheme.colors['purple']} />
            Remover
          </ItemCartCheckoutRemove>
        </ItemCartCheckoutActions>
      </div>
      <ItemCartCheckoutUnityPrice>
        {coffee.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
      </ItemCartCheckoutUnityPrice>
    </ItemCartCheckout>
  )
}
