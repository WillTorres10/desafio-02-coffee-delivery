import * as zod from 'zod'
import {PaymentMethods} from "@/enums/PaymentMethods.ts";

export const checkoutFormValidationSchema = zod.object({
  zipcode: zod.string().min(8).max(9),
  street: zod.string().min(1).max(100),
  number: zod.string(),
  complement: zod.string().min(1).max(100).optional().or(zod.literal('')),
  neighborhood: zod.string().min(1).max(100),
  city: zod.string().min(1).max(100),
  state: zod.string().min(2).max(2),
  paymentMethod: zod.nativeEnum(PaymentMethods),
});

export type checkoutForm = zod.infer<typeof checkoutFormValidationSchema>
