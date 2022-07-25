import styled from "styled-components";

import { sp, b } from "../../../../styles/variables";
import { colors } from "../../../../styles/theme";

export const SDropdown = styled.ul`
  position: relative;
  white-space: nowrap;
  padding: ${sp.smSpacing};

  @media ${b.md} {
    position: absolute;
    top: ${sp.xxlSpacing};
    width: 20rem;
    border-radius: 0.625rem;
    background: ${colors.wewak};
  }
`;

export const STreeItem = styled.li`
  padding: ${sp.smSpacing};
`;
