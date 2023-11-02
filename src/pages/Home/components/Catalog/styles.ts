import styled from "styled-components";

export const CatalogContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`

export const CatalogContent = styled.div`
  width: 100%;
  max-width: 70rem;
  
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const CatalogList = styled.div`
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: repeat(4, 16rem);
  gap: 2rem;
`
