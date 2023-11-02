import React, {useContext} from "react";
import {CartContext} from "@/contexts/CartContext.tsx";
import {getCoffeeById} from "@/repository/catalog.ts";
import {ButtonCheckout, CheckoutValues, CheckoutValuesResult} from "@/pages/Checkout/styles.ts";
import {AlertYellow} from "@/components/Alerts.ts";
import {CoffeeItemCheckout} from "@/pages/Checkout/ListItems/CoffeeItemCheckout.tsx";
import {useFormContext} from "react-hook-form";
import {checkoutForm} from "@/pages/Checkout/CheckoutFormConfig.ts";

export function ListItems() {
    const {items} = useContext(CartContext);

    let content: React.JSX.Element | React.JSX.Element[] = <AlertYellow>Você ainda não adicionou nenhum
        café</AlertYellow>;
    let totalPrice = 0;

    const {formState: {isValid}} = useFormContext<checkoutForm>()

    let disableButton = true;
    if (items.length > 0) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        content = items.map((item) => {
            const coffee = getCoffeeById(item.coffeeId);
            if (coffee) {
                totalPrice += coffee.price * item.quantity;
                return <CoffeeItemCheckout coffee={coffee} quantity={item.quantity} key={coffee.id}/>;
            }
            return <></>;
        });
        disableButton = !isValid;
    }

    return (
        <div>
            <h2>Cafés selecionados</h2>
            <CheckoutValues>
                {content}
                <CheckoutValuesResult>
                    <p>
                        Total de Items <span>{totalPrice.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    })}</span>
                    </p>
                    <p>
                        Entrega <span>R$ 3,50</span>
                    </p>
                    <p className="total">
                        Total <span>{(3.5 + totalPrice).toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    })}</span>
                    </p>
                </CheckoutValuesResult>
                <ButtonCheckout disabled={disableButton} type="submit">
                    Confirmar Pedido
                </ButtonCheckout>
            </CheckoutValues>
        </div>
    )
}
