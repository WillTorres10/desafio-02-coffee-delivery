import coffeeIntroImg from "@/assets/imgs/coffe-intro.svg"
import {
  IntroContainer,
  IntroContent,
  IntroIcon,
  IntroIconColor,
  IntroIcons
} from "@/pages/Home/components/Intro/styles.ts";
import {Coffee, Package, ShoppingCart, Timer} from "phosphor-react";

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>Com o coffee delivery você recebe seu café onde estiver, a qualquer hora</h3>
          <IntroIcons>
            <div>
              <IntroIcon colorofbullet={IntroIconColor["yellow-dark"]}>
                <ShoppingCart weight="fill" size={16} />
              </IntroIcon>
              Compra simples e segura
            </div>
            <div>
              <IntroIcon colorofbullet={IntroIconColor["base-text"]}>
                <Package weight="fill" size={16} />
              </IntroIcon>
              Embalagem mantém o café intacto
            </div>
            <div>
              <IntroIcon colorofbullet={IntroIconColor["yellow"]}>
                <Timer weight="fill" size={16} />
              </IntroIcon>
              Entrega rápida e rastreada
            </div>
            <div>
              <IntroIcon colorofbullet={IntroIconColor["purple-dark"]}>
                <Coffee weight="fill" size={16} />
              </IntroIcon>
              O café chega fresquinho até você
            </div>
          </IntroIcons>
        </div>
        <div>
          <img src={coffeeIntroImg} alt="Coffee delivery" />
        </div>
      </IntroContent>
    </IntroContainer>
  )
}
