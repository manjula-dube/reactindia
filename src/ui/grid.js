import styled from "styled-components";
import { responsive } from "./utils";

export const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-gap: 40px;
  align-items: center;
  grid-auto-rows: minmax(100px, auto);
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas: 'lt lt lt lt lt lt rt rt rt rt rt rt';

  ${responsive.xs} {
    grid-template-areas:
      'rt rt rt rt rt rt rt rt rt rt rt rt'
      'lt lt lt lt lt lt lt lt lt lt lt lt';
  }

  ${responsive.sm} {
    grid-template-areas:
      'rt rt rt rt rt rt rt rt rt rt rt rt'
      'lt lt lt lt lt lt lt lt lt lt lt lt';
  }

  ${responsive.md} {
    grid-template-areas: 'lt lt lt lt lt lt rt rt rt rt rt rt';
  }

  ${responsive.lg} {
    grid-template-areas: 'lt lt lt lt lt lt rt rt rt rt rt rt';
  }
`;

export const Left = styled.div`
  grid-area: lt;
`;

export const Right = styled.div`
  grid-area: rt;
  width: 100%;
  height: 100%;
`;
