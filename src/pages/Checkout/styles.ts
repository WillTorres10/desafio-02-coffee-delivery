import styled from "styled-components";
import {ButtonDefault} from "@/components/buttons.ts";

export const FormCheckout = styled.form`
  width: 100%;
  max-width: 70rem;
  
  display: flex;
  flex-direction: row;
  gap: 2rem;
  
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 0.9375rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const CardCheckout = styled.div`
  width: 40rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['base-card']};
  padding: 2.5rem;
  margin-bottom: 0.75rem;
`

export const CardTitleCheckout = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  gap: 0.5rem;
  
  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-text']};
  }
`

export const FieldsCheckout = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 100%;
`

export const PaymentMethodButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ButtonSelectPaymentMethod = styled.button`
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 0.75rem;
  
  width: 100%;
  margin-left: 0.75rem;

  border-radius: 6px;
  border: 0;
  background: ${({ theme }) => theme.colors['base-button']};

  color: ${({ theme }) => theme.colors['base-text']};
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 19.2px */
  text-transform: uppercase;
  
  transition: all 0.2s ease-in-out;
  
  &:focus, &.active {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['purple']};
  }

  &.active {
    background: ${({ theme }) => theme.colors['purple-light']};
  }
`;

export const CheckoutValues = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  width: 28rem;

  border-radius: 6px 44px;
  background: ${(props) => props.theme.colors['base-card']};
`

export const CheckoutValuesResult = styled.div`
  color: ${(props) => props.theme.colors['base-text']};
  text-align: right;
  
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  
  width: 100%;
  
  p {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.84375rem;
  }
  
  .total {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`;

export const ButtonCheckout = styled(ButtonDefault)`
  background-color: ${(props) => props.theme.colors['yellow']};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.75rem 0.5rem;

  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 22.4px */
  text-transform: uppercase;
  color: ${(props) => props.theme.colors['white']};
  
  &:hover {
    background-color: ${(props) => props.theme.colors['yellow-dark']};
  }
  
  &:disabled {
    background-color: ${(props) => props.theme.colors['yellow-light']};
  }
`;