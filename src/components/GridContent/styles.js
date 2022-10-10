import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    max-width: 58rem;
    margin: 0 auto;
  `}
`;

export const HTML = styled.div`
  ${({ theme }) => css`
    margin: ${theme.colors.secondaryBg};
  `}
`;
