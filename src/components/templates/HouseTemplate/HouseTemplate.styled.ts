import styled from "styled-components";

export const StyledHouseTemplate = styled.div`
  .back-link {
    font-size: ${({ theme }) => theme.fontSize.l};

    a {
      text-transform: uppercase;
      text-decoration: none;

      i {
        display: inline-block;
        transform: rotate(180deg) translateY(-2px);
      }
    }
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-family: "Got", sans-serif;
    font-weight: 300;
    text-align: center;
    margin: 2.5rem 0;
  }
`;
export const StyledHouseGrid = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
  display: grid;
  grid-template-columns: 20% 1fr;
`;
