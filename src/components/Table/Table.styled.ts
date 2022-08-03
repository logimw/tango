import styled from "styled-components";

export const StyledTable = styled.div`
  .table-wrapper {
    max-height: calc(100vh - 28rem - 10vh);
    overflow-y: scroll;
  }

  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    form {
      position: relative;
    }

    label {
      position: absolute;
      top: -13px;
    }
  }

  table {
    width: 100%;
    position: relative;

    thead {
      position: sticky;
      top: 0;
      z-index: 1;

      tr {
        background-color: ${({ theme }) => theme.colors.secondary};
        font-weight: 300;
      }
    }

    tbody {
      position: relative;
    }

    tr {
      &:nth-child(even) {
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }

    th {
      font-family: "Got", serif;
      font-size: ${({ theme }) => theme.fontSize.s};
    }

    td {
      font-size: ${({ theme }) => theme.fontSize.m};
    }

    td,
    th {
      padding: 0.5rem;
      box-shadow: 1px 0 0 rgba(0, 0, 0, 0.1);
      font-weight: normal;
    }
  }
`;
