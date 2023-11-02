import {CoffeeCatalogItem} from "@/reducers/Cart/reducer.ts";

import TraditionalCoffeeImage from "@/assets/imgs/catalog/tradicional.png"
import AmericanEspressoCoffeeImage from "@/assets/imgs/catalog/american-espresso.png"
import CreamyEspressoCoffeeImage from "@/assets/imgs/catalog/creamy-espresso.png"
import IcedEspressoCoffeeImage from "@/assets/imgs/catalog/iced-espresso.png"
import CoffeeWithMilkCoffeeImage from "@/assets/imgs/catalog/coffee-with-milk.png"
import LatteCoffeeImage from "@/assets/imgs/catalog/latte.png"
import MocaccinoCoffeeImage from "@/assets/imgs/catalog/mocaccino.png"
import MacchiatoCoffeeImage from "@/assets/imgs/catalog/macchiato.png"
import HotChocolateCoffeeImage from "@/assets/imgs/catalog/hot-chocolate.png"
import CubanCoffeeImage from "@/assets/imgs/catalog/cuban.png"
import HawaiianCoffeeImage from "@/assets/imgs/catalog/hawaiian.png"
import ArabicCoffeeImage from "@/assets/imgs/catalog/arabic.png"
import IrishCoffeeImage from "@/assets/imgs/catalog/irish.png"

export function getCatalogOfCoffees(): CoffeeCatalogItem[] {
  return [
    {
      id: 1,
      name: 'Expresso Tradicional',
      tags: ['Tradicional'],
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      image: TraditionalCoffeeImage,
    },
    {
      id: 2,
      name: 'Expresso Americano',
      tags: ['Tradicional'],
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      image: AmericanEspressoCoffeeImage,
    },
    {
      id: 3,
      name: 'Expresso Cremoso',
      tags: ['Tradicional'],
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
      image: CreamyEspressoCoffeeImage,
    },
    {
      id: 4,
      name: 'Expresso Gelado',
      tags: ['Tradicional', 'Gelado'],
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      image: IcedEspressoCoffeeImage,
    },
    {
      id: 5,
      name: 'Café com Leite',
      tags: ['Tradicional', 'Com Leite'],
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      image: CoffeeWithMilkCoffeeImage,
    },
    {
      id: 6,
      name: 'Latte',
      tags: ['Tradicional', 'Com Leite'],
      description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      image: LatteCoffeeImage,
    },
    {
      id: 7,
      name: 'Capuccino',
      tags: ['Tradicional', 'Com Leite'],
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      image: TraditionalCoffeeImage,
    },
    {
      id: 8,
      name: 'Macchiato',
      tags: ['Tradicional', 'Com Leite'],
      description: 'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
      image: MacchiatoCoffeeImage,
    },
    {
      id: 9,
      name: 'Mocaccino',
      tags: ['Tradicional', 'Com Leite'],
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      image: MocaccinoCoffeeImage,
    },
    {
      id: 10,
      name: 'Chocolate Quente',
      tags: ['Especial', 'Com Leite'],
      description: 'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
      image: HotChocolateCoffeeImage,
    },
    {
      id: 11,
      name: 'Cubano',
      tags: ['Especial', 'Alcoólico', 'Com Leite'],
      description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
      image: CubanCoffeeImage,
    },
    {
      id: 12,
      name: 'Havaiano',
      tags: ['Especial'],
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      image: HawaiianCoffeeImage,
    },
    {
      id: 13,
      name: 'Árabe',
      tags: ['Especial'],
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
      image: ArabicCoffeeImage,
    },
    {
      id: 14,
      name: 'Irlandês',
      tags: ['Especial', 'Alcoólico'],
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
      image: IrishCoffeeImage,
    },
  ]
}

export function getCoffeeById(coffeeId: number): CoffeeCatalogItem|undefined {
  return getCatalogOfCoffees().find(coffee => coffee.id === coffeeId)
}
