import {PaymentMethods} from "@/enums/PaymentMethods.ts";
import {ButtonSelectPaymentMethod} from "@/pages/Checkout/styles.ts";
import {ReactNode} from "react";

interface PaymentMethodButtonProps {
  paymentMethod: PaymentMethods;
  currentPaymentMethod: PaymentMethods;
  setPaymentMethod: (paymentMethod: PaymentMethods) => void;
  children: ReactNode;
}
export function PaymentMethodButton({paymentMethod, currentPaymentMethod, setPaymentMethod, children}: PaymentMethodButtonProps) {
  const active = paymentMethod === currentPaymentMethod;

  const handleClick = () => {
    setPaymentMethod(paymentMethod);
  }

  return (
    <ButtonSelectPaymentMethod
      type={'button'}
      onClick={handleClick}
      className={active ? 'active' : ''}
    >
      {children}
    </ButtonSelectPaymentMethod>
  )
}
