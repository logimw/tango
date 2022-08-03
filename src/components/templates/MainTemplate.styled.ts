import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "head head"
    "main  main"
    "foot  foot";
  grid-template-columns: 25rem 1fr;
  grid-template-rows: 10rem 1fr 8rem;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
  height: 90%;
  background-color: #fff;
  grid-column: 2;
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
  position: relative;
`;
