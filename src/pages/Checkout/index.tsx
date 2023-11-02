import {Bank, CreditCard, CurrencyDollar, MapPinLine, Money} from "phosphor-react";
import {
    CardCheckout,
    CardTitleCheckout,
    FormCheckout,
    PaymentMethodButtons
} from "@/pages/Checkout/styles.ts";
import {CatalogContainer} from "@/pages/Home/components/Catalog/styles.ts";
import {defaultTheme} from "@/styles/themes/default.ts";

import {ListItems} from "@/pages/Checkout/ListItems";
import {FormProvider, useForm} from "react-hook-form";
import {checkoutForm, checkoutFormValidationSchema} from "@/pages/Checkout/CheckoutFormConfig.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {PaymentMethods} from "@/enums/PaymentMethods.ts";
import {PaymentMethodButton} from "@/pages/Checkout/PaymentMethodButton.tsx";
import {AddressForm} from "../AddressForm/CheckoutForm";
import {CartContext} from "@/contexts/CartContext.tsx";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";

export function Checkout() {
    const checkoutForm = useForm<checkoutForm>({
        resolver: zodResolver(checkoutFormValidationSchema),
        defaultValues: {
            zipcode: '',
            street: '',
            number: '',
            complement: '',
            neighborhood: '',
            city: '',
            state: '',
            paymentMethod: PaymentMethods.CREDIT_CARD
        }
    });

    const {handleSubmit, watch, setValue } = checkoutForm;

    const paymentMethod = watch('paymentMethod');

    const selectPaymentMethod = (paymentMethod: PaymentMethods) => {
        setValue('paymentMethod', paymentMethod);
    }

    const {setCheckoutData, cleanCart} = useContext(CartContext);
    const navigate = useNavigate();

    const handleCheckout = (data: checkoutForm) => {
        setCheckoutData(data);
        cleanCart();
        navigate('/success');
    }

    return (
        <CatalogContainer>
            <FormProvider {...checkoutForm}>
                <FormCheckout onSubmit={handleSubmit(handleCheckout)}>
                    <div>
                        <h2>Complete seu pedido</h2>
                        <div>
                            <CardCheckout>
                                <CardTitleCheckout>
                                    <MapPinLine size={22} color={defaultTheme.colors['yellow-dark']}/>
                                    <div>
                                        <h1>Endereço de Entrega</h1>
                                        <h2>Informe o endereço onde deseja receber seu pedido</h2>
                                    </div>
                                </CardTitleCheckout>
                                <AddressForm addressForm={checkoutForm}/>
                            </CardCheckout>
                            <CardCheckout>
                                <CardTitleCheckout>
                                    <CurrencyDollar size={22} color={defaultTheme.colors['purple']}/>
                                    <div>
                                        <h1>Pagamento</h1>
                                        <h2>O pagamento é feito na entrega. Escolha a forma que deseja pagar</h2>
                                    </div>
                                </CardTitleCheckout>
                                <PaymentMethodButtons>
                                    <PaymentMethodButton
                                        paymentMethod={PaymentMethods.CREDIT_CARD}
                                        currentPaymentMethod={paymentMethod}
                                        setPaymentMethod={selectPaymentMethod}
                                    >
                                        <CreditCard size={16} color={defaultTheme.colors['purple']}/>
                                        <span>Cartão de Crédito</span>
                                    </PaymentMethodButton>
                                    <PaymentMethodButton
                                        paymentMethod={PaymentMethods.DEBIT_CARD}
                                        currentPaymentMethod={paymentMethod}
                                        setPaymentMethod={selectPaymentMethod}
                                    >
                                        <Bank size={16} color={defaultTheme.colors['purple']}/>
                                        <span>Cartão de Débito</span>
                                    </PaymentMethodButton>
                                    <PaymentMethodButton
                                        paymentMethod={PaymentMethods.MONEY}
                                        currentPaymentMethod={paymentMethod}
                                        setPaymentMethod={selectPaymentMethod}
                                    >
                                        <Money size={16} color={defaultTheme.colors['purple']}/>
                                        <span>Dinheiro</span>
                                    </PaymentMethodButton>
                                </PaymentMethodButtons>
                            </CardCheckout>
                        </div>
                    </div>
                    <ListItems/>
                </FormCheckout>
            </FormProvider>
        </CatalogContainer>
    )
}
