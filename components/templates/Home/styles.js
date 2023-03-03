import styled from "styled-components";

import { sp } from "../../../styles/variables";

export const HomePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - ${sp.headerHeight} - ${sp.lgSpacing} * 2);
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.primary};
`;
