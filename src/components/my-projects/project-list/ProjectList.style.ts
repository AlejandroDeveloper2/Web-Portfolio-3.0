import styled from "styled-components";

const ProductListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 100%);
  gap: 1.57rem;
  place-items: center;

  @media (min-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export { ProductListContainer };
