import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "head head"
    "sidebar  main"
    "foot  foot";
  grid-template-columns: 25rem 1fr;
  grid-template-rows: 90px 1fr 8rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;
