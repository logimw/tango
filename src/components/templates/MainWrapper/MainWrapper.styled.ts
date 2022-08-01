import styled from "styled-components";

export const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1.5rem 66% 1fr;
  grid-column: 2;
  align-items: center;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
`;
