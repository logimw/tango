import styled from "styled-components";

export const StyledLoading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-family: "Got", serif;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  transform: translate(-50%, -50%);
`;
