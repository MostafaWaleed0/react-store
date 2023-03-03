import styled from "styled-components";
import { sp, spContainer, bd, b } from "../../../../styles/variables";
import { colors } from "../../../../styles/theme";

export const Section = styled.section`
  @media ${bd.md} {
    margin-top: ${sp.xxmSpacing};
  }
`;

export const CardsTitle = styled.h2`
  margin: ${spContainer.mdSpacing} 0 ${sp.xmSpacing};
  @media ${bd.md} {
    display: none;
  }
`;

export const Cards = styled.ol`
  --width: 22rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--width), 1fr));
  gap: ${sp.smSpacing};
  @media ${bd.sm} {
    --width: 20rem;
  }
`;

export const Card = styled.li`
  padding: ${sp.xmSpacing} ${sp.xlSpacing} ${sp.smSpacing} ${sp.smSpacing};
  border-radius: 0.625em;

  &:hover {
    box-shadow: ${colors.cardBoxShadow};
    border: 1px solid ${colors.wewak};
  }

  @media ${bd.md} {
    min-height: 8.75rem;
    padding: ${sp.xxmSpacing};
  }
`;

export const CardTitle = styled.h3`
  font-weight: 500;
  @media ${b.md} {
    margin-bottom: ${sp.xxmSpacing};
  }
`;

export const CardText = styled.p`
  margin-bottom: ${sp.smSpacing};
  @media ${bd.md} {
    margin-bottom: ${sp.xxmSpacing};
  }
`;

export const CardLink = styled.a`
  color: ${colors.wewak};
`;

export const Icon = styled.div`
  @media ${bd.md} {
    max-height: 1.75rem;
    aspect-ratio: 1 /1;
  }
`;
