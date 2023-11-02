import styled from "styled-components";
import {CatalogContainer} from "@/pages/Home/components/Catalog/styles.ts";
import {IntroIcon} from "@/pages/Home/components/Intro/styles.ts";

export const SuccessContainer = styled(CatalogContainer)`
  
  gap: 6.375rem;
  
  h1 {
    color: ${(props) => props.theme.colors['yellow-dark']};

    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%; /* 41.6px */
  }

  h2 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 26px */
  }
`

export const CheckoutDetailsBox = styled.div`
  display: flex;
  width: 32.875rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 2.5rem;

  border-radius: 6px 36px;
  
  background: linear-gradient(to right, ${(props) => props.theme.colors['yellow']}, ${(props) => props.theme.colors['purple']});
  padding: 1px;
`;

export const CheckoutDetailsBoxContent = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors['background']};
  border-radius: 6px 36px;
  padding: 2.5rem;
  
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const CheckoutDetailsBoxItem = styled.h1`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  
  p {
    color: ${(props) => props.theme.colors['base-text']};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 20.8px */
  }
`

export const CheckoutDetailsBoxItemIcon = styled(IntroIcon)`
  padding: 0.5rem;
`