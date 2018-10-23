import styled from 'styled-components';

function getWidthString(span) {
  if (!span) return "";

  const width = (span / 12) * 100;
  return `width: ${width}%`;
}

export const Row = styled.div`
  align-items: center;
  justify-content: space-between;
  &::after {
    content: '';
    clear: both;
    display: table;
  }
`;

export const Col = styled.div`
float: ${props => (props.move && props.move) || "left"};
width: 100%;

@media only screen and (min-width: 786px) {
  ${({ sm }) => sm && getWidthString(sm)};
}

@media only screen and (min-width: 992px) {
  ${({ md }) => md && getWidthString(md)};
}

@media only screen and (min-width: 1200px) {
  ${({ lg }) => lg && getWidthString(lg)};
}
`;
