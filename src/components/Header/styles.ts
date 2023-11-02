import styled from "styled-components";
import {ButtonDefault} from "@/components/buttons.ts";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors['background']};
  position: fixed;
  width: 100%;
  top: 0;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  width: 100%;
  max-width: 70rem;
  padding: 2rem 0;
  
  img {
    height: 2.5rem;
  }

  a:focus {
    outline: 0;
    box-shadow: none;
  }
  
`

export const HeaderButtonsContainer = styled.div`
  gap: 0.75rem;
  display: flex;
  flex-direction: row;
`

export const HeaderLocation = styled(ButtonDefault)`
  background-color: ${({theme}) => theme.colors['purple-light']};
  color: ${({theme}) => theme.colors['purple']};
  
  &:focus {
    box-shadow: none;
  }
`

export const HeaderCart = styled(ButtonDefault)`
  background-color: ${({theme}) => theme.colors['yellow-light']};
  color: ${({theme}) => theme.colors['yellow-dark']};
  
  &:focus {
    box-shadow: none;
  }
  
  span {
    background-color: ${({theme}) => theme.colors['yellow-dark']};
    color: ${({theme}) => theme.colors['white']};
    border-radius: 100%;
    padding: 0.25rem;
    
    font-size: 0.75rem;
    width: 1.25rem;
    height: 1.25rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    position: absolute;
    margin-top: -2.5rem;
    margin-left: 1.3rem;
  }
`
