import styled from "styled-components";

export const StyledTable = styled.div`
  height: 90%;
  background-color: #fff;
  grid-column: 2;
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;

  table {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.m};

    thead tr {
      background-color: #9dd0c3;
    }

    tr {
      //box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);

      &:nth-child(even) {
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }

    td,
    th {
      padding: 0.5rem;
      box-shadow: 1px 0 0 rgba(0, 0, 0, 0.1);
    }
  }
`;
