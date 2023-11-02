import {
  HeaderButtonsContainer,
  HeaderCart,
  HeaderContainer,
  HeaderContent,
  HeaderLocation
} from "@/components/Header/styles.ts";
import logoCoffee from "@/assets/logos/coffee-delivery-logo.svg";
import {MapPin, ShoppingCart} from "phosphor-react";
import {useContext} from "react";
import {CartContext} from "@/contexts/CartContext.tsx";
import {NavLink} from "react-router-dom";

export function Header() {

  const {items} = useContext(CartContext);

  const totalItemsBullet = items.length === 0 ? <></> : <span>{items.length}</span>;

  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to={"/"} title="Página Inicial">
          <img src={logoCoffee} alt="" />
        </NavLink>
        <HeaderButtonsContainer>
          <HeaderLocation>
            <MapPin size={22} weight="fill" /> Porto Alegre, RS
          </HeaderLocation>
          <NavLink to={"/checkout"} title="Checkout">
            <HeaderCart>
              <ShoppingCart size={22} weight="fill" />
              {totalItemsBullet}
            </HeaderCart>
          </NavLink>
        </HeaderButtonsContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
