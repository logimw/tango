import styled from "styled-components";

export const StyledNavigation = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-top: 1rem;

  .page-counter {
    position: absolute;
    right: 0;
  }
`;

export const StyledNavBtn = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  width: 3rem;
  height: 3rem;
  transition: background-color 100ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;
