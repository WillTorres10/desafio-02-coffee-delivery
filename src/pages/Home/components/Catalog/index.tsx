import {getCatalogOfCoffees} from "@/repository/catalog.ts";
import {CoffeeItem} from "@/pages/Home/components/Catalog/components/CoffeeItem";
import {CatalogContainer, CatalogContent, CatalogList} from "@/pages/Home/components/Catalog/styles.ts";
import {CoffeeCatalogItem} from "@/reducers/Cart/reducer.ts";
export function Catalog() {
  return (
    <CatalogContainer>
      <CatalogContent>
      <h1>Nossos Cafés</h1>
      <CatalogList>
      {getCatalogOfCoffees().map((coffee: CoffeeCatalogItem) => (
        <CoffeeItem coffee={coffee} key={coffee.id} />
      ))}
      </CatalogList>
      </CatalogContent>
    </CatalogContainer>
  )
}
