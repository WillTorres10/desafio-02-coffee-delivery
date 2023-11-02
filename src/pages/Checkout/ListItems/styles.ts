import styled from "styled-components";
import {ButtonDefault} from "@/components/buttons.ts";

export const ItemCartCheckout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1.25rem;

  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 20.8px */

  img {
    width: 4rem;
    height: 4rem;
  }
  
  border-bottom: 1.5px solid ${({ theme }) => theme.colors['base-button']};
  padding: 0 0 1.5rem 0;
  margin-bottom: 1.5rem;
`

export const ItemCartCheckoutActions = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -0.5rem;
  
  align-items: baseline;
`

export const ItemCartCheckoutRemove = styled(ButtonDefault)`
  height: 2.3rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors['base-text']};
  
  border-radius: 6px;
  
  background: ${(props) => props.theme.colors['base-button']};
  
  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }
`

export const ItemCartCheckoutUnityPrice = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors['base-text']};
  text-align: right;
  
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 20.8px */
`
