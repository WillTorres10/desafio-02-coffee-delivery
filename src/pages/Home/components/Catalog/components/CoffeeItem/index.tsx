import {ShoppingCart} from "phosphor-react";
import {
  CoffeeItemContainer,
  CoffeeItemPrice, CoffeeItemPriceValue,
  CoffeeItemTags
} from "@/pages/Home/components/Catalog/components/CoffeeItem/styles.ts";
import {CounterInput} from "@/components/CounterInput";
import {ButtonPurpleDarkIcon} from "@/components/buttons.ts";
import {useContext, useState} from "react";
import {CoffeeCatalogItem} from "@/reducers/Cart/reducer.ts";
import {CartContext} from "@/contexts/CartContext.tsx";

interface CoffeeItem {
  coffee: CoffeeCatalogItem
}
export function CoffeeItem({coffee}: CoffeeItem){
  const {addItem} = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const handleAddQuantity = () => {
    setQuantity(state => state + 1);
  }

  const handleRemoveQuantity = () => {
    if ((quantity - 1) >= 1){
      setQuantity(state => state - 1);
    }
  }

  const handleAddItem = () => {
    addItem(coffee.id, quantity);
  }

  return (
    <CoffeeItemContainer>
      <img src={coffee.image} alt={coffee.name}/>
      <CoffeeItemTags>
        {coffee.tags.map((tag: string) => <span key={tag}>{tag}</span>)}
      </CoffeeItemTags>
      <h2>{coffee.name}</h2>
      <p>{coffee.description}</p>
      <CoffeeItemPrice>
        <CoffeeItemPriceValue>
          {coffee.price.toLocaleString('pt-BR', {style: 'decimal', minimumFractionDigits: 2})}
        </CoffeeItemPriceValue>
        <CounterInput number={quantity} addHandler={handleAddQuantity} lessHandler={handleRemoveQuantity} />
        <ButtonPurpleDarkIcon onClick={handleAddItem}>
          <ShoppingCart weight={'fill'} size={22} />
        </ButtonPurpleDarkIcon>
      </CoffeeItemPrice>
    </CoffeeItemContainer>
  )
}
