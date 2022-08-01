import styled from "styled-components";

export const StyledFooter = styled.footer`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: ${({ theme }) => theme.fontFamily.decorated};
  grid-column: foot;
  display: flex;
  justify-content: center;
  align-items: center;
`;
