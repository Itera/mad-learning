import styled from 'styled-components';

import { usingTypography } from '../../hooks/theme';

export const Wrapper = styled.nav`
  display: flex;
  padding: ${usingTypography((t) => t.scaleSpacing(4))}px 0;
`;

export const Icon = styled.img`
  margin-right: 3vw;
  padding: ${usingTypography((t) => t.scaleSpacing(4))}px 0 0;
  width: 100px;
`;

export const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;

export const MenuItem = styled.li`
  padding: ${usingTypography((t) => t.scaleSpacing(2))}px;

  &:first-of-type {
    padding-left: 0;
  }
`;
