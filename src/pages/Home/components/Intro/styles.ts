import styled from "styled-components";
import introBackground from "@/assets/backgrounds/intro.svg";

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${introBackground});
  background-size: cover;
`
export const IntroContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 6.75rem 0;
  max-width: 70rem;
  gap: 2.5rem;
  
  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-title']};
    margin-bottom: 1rem;
  }
  
  h3 {
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin-top: 0;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const IntroIcons = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 2rem;
  grid-gap: 1.25rem;
  
  div {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    align-items: center;
  }
`

export enum IntroIconColor {
  'yellow-dark'= 'yellow-dark',
  'base-text' = 'base-text',
  'yellow' = 'yellow',
  'purple-dark' = 'purple-dark'
}
export interface IntroIconProps {
  colorofbullet: IntroIconColor;
}
export const IntroIcon = styled.div<IntroIconProps>`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors[props.colorofbullet]};
  color: ${({ theme }) => theme.colors['background']};
`
