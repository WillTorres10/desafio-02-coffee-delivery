import {CurrencyDollar, MapPin, Timer} from "phosphor-react";
import deliveryImg from "@/assets/imgs/delivery.svg";
import {
    CheckoutDetailsBox,
    CheckoutDetailsBoxContent,
    CheckoutDetailsBoxItem, CheckoutDetailsBoxItemIcon,
    SuccessContainer
} from "@/pages/Success/styles.ts";
import {IntroIconColor} from "@/pages/Home/components/Intro/styles.ts";
import {useContext} from "react";
import {CartContext} from "@/contexts/CartContext.tsx";
import {PaymentMethods} from "@/enums/PaymentMethods.ts";

export const Success = () => {

    const {checkoutData} = useContext(CartContext);

    let paymentMethod = "Dinheiro";
    switch (checkoutData?.paymentMethod) {
        case PaymentMethods.CREDIT_CARD:
            paymentMethod = "Cartão de Crédito";
            break;
        case PaymentMethods.DEBIT_CARD:
            paymentMethod = "Cartão de Débito";
            break;
    }

    return (
        <SuccessContainer>
            <div>
                <h1>Uhu! Pedido confirmado</h1>
                <h2>Agora é só aguardar que logo o café chegará até você</h2>
                <CheckoutDetailsBox>
                    <CheckoutDetailsBoxContent>
                        <CheckoutDetailsBoxItem>
                            <CheckoutDetailsBoxItemIcon colorofbullet={IntroIconColor["purple-dark"]}>
                                <MapPin size={16} weight={'fill'}/>
                            </CheckoutDetailsBoxItemIcon>
                            <p>
                                Entrega em <b>{checkoutData?.street}, {checkoutData?.number}</b><br />
                                {checkoutData?.neighborhood} - {checkoutData?.city}, {checkoutData?.state}
                            </p>
                        </CheckoutDetailsBoxItem>
                        <CheckoutDetailsBoxItem>
                            <CheckoutDetailsBoxItemIcon colorofbullet={IntroIconColor["yellow"]}>
                                <Timer size={16} weight={'fill'}/>
                            </CheckoutDetailsBoxItemIcon>
                            <p>
                                Previsão de entrega<br/>
                                <b>10 min - 30 min</b>
                            </p>
                        </CheckoutDetailsBoxItem>
                        <CheckoutDetailsBoxItem>
                            <CheckoutDetailsBoxItemIcon colorofbullet={IntroIconColor["yellow-dark"]}>
                                <CurrencyDollar size={16} weight={'fill'}/>
                            </CheckoutDetailsBoxItemIcon>
                            <p>
                                Pagamento na entrega<br/>
                                <b>{paymentMethod}</b>
                            </p>
                        </CheckoutDetailsBoxItem>
                    </CheckoutDetailsBoxContent>
                </CheckoutDetailsBox>
            </div>
            <div>
                <img src={deliveryImg}/>
            </div>
        </SuccessContainer>
    )
}