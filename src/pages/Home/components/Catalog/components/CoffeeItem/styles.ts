import styled from "styled-components";

export const CoffeeItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme}) => theme.colors['base-card']};
  padding: 0 1.25rem 1.25rem 1.25rem;
  border-radius: 6px 36px 6px 36px;
  
  img {
    margin-top: -1.25rem;
  }
  
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    
    color: ${({theme}) => theme.colors['base-subtitle']};
    
    margin-top: 1rem;
  }
  
  p {
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    
    text-align: center;
    
    color: ${({theme}) => theme.colors['base-label']};
    
    padding-top: 0.5rem;
    padding-bottom: 2.0625rem;
  }
`

export const CoffeeItemTags = styled.div`
  margin-top: 0.75rem;
  
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  
  span {
    padding: 0.25rem 0.5rem;
    border-radius: 20px;
    background-color: ${({theme}) => theme.colors['yellow-light']};
    
    font-family: 'Roboto', sans-serif;
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
    color: ${({theme}) => theme.colors['yellow-dark']};
  }
`

export const CoffeeItemPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`

export const CoffeeItemPriceValue = styled.div`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
  &::before {
    content: 'R$ ';
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
  }
`
