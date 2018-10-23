import styled from 'styled-components';
import { darken } from 'polished';
import { colors } from './colors';

export const Title = styled.h1`
  padding: 0px;
  margin: 0px;
  font-weight: 600;
  font-size: 4rem;
  color: ${darken(0.3, colors.darkText)};
`;

export const SubTitle = styled.h5`
  padding: 0 0 15px;
  margin: 0px;
  font-size: 1.5rem;
  color: ${darken(0.3, colors.darkText)};
`;

export const Body = styled.div`
  padding: 10px 0px;
  font-size: 16px;
  line-height: 1.4em;
  color: ${darken(0.1, colors.darkText)};
  ul,
  ol {
    margin: 1em 0 1em 1.4em;
  }
`;
