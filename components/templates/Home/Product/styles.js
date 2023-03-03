import styled from "styled-components";
import { sp, bd, fs, spContainer } from "../../../../styles/variables";
import { colors } from "../../../../styles/theme";

export const ProductSection = styled.section`
  margin-top: ${spContainer.xlSpacing};
  @media ${bd.lg} {
    margin-top: ${spContainer.lgSpacing};
  }
`;

export const ProductTitle = styled.h2`
  text-align: center;
  margin-bottom: ${sp.lgSpacing};
  @media ${bd.md} {
    margin-bottom: ${sp.smSpacing};
  }
`;

export const Cards = styled.ol`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${sp.smSpacing};
  @media ${bd.md} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: ${sp.lgSpacing};
    column-gap: ${sp.xxmSpacing};
  }
`;

export const CardTitle = styled.p`
  margin-top: ${sp.smSpacing};
  @media ${bd.md} {
    font-size: calc(${fs.fs400} + 2px);
    margin-top: ${sp.xxmSpacing};
  }
`;

export const CategoryText = styled.p`
  font-size: ${fs.fs300};
  color: ${colors.silver};
  margin-top: ${sp.xxmSpacing};
`;

export const Stars = styled.div`
  display: flex;
  margin-top: ${sp.xxmSpacing};
  @media ${bd.md} {
    max-width: 4.75rem;
    max-height: 0.75rem;
  }
`;

export const PriceText = styled.p`
  font-size: ${fs.fs300};
  margin-top: ${sp.smSpacing};
  @media ${bd.md} {
    margin-top: ${sp.xxmSpacing};
  }
`;
