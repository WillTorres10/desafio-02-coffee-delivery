import {FieldsCheckout} from "@/pages/Checkout/styles.ts";
import {InputBoxWithOptional, TextInput} from "@/components/Inputs.ts";
import {UseFormReturn} from "react-hook-form";
import {checkoutForm} from "@/pages/Checkout/CheckoutFormConfig.ts";

interface AddressFormProps {
  addressForm: UseFormReturn<checkoutForm>
}
export function AddressForm({addressForm}: AddressFormProps) {

  const {register,  watch} = addressForm;

  const complement = watch('complement');

  const optionalText = complement!.length === 0 ? <div>Opcional</div> : <></>;

  return (
    <>
      <FieldsCheckout>
        <TextInput type="text" placeholder="CEP" width={'12.5rem'} required {...register('zipcode')} />
      </FieldsCheckout>
      <FieldsCheckout>
        <TextInput type="text" placeholder="Rua" required {...register('street')} />
      </FieldsCheckout>
      <FieldsCheckout>
        <TextInput type="text" placeholder="Número" width={'12.5rem'} required {...register('number')} />
        <InputBoxWithOptional>
          <TextInput type="text" placeholder="Complemento" {...register('complement')} />
          {optionalText}
        </InputBoxWithOptional>
      </FieldsCheckout>
      <FieldsCheckout>
        <TextInput type="text" placeholder="Bairro" width={'12.5rem'} required {...register('neighborhood')} />
        <TextInput type="text" placeholder="Cidade" required {...register('city')} />
        <TextInput type="text" placeholder="UF" width={'3.75rem'} maxLength={2} required {...register('state')} />
      </FieldsCheckout>
    </>
  );
}
