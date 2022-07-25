import styled from "styled-components";
import { spContainer, sp, bd, b, fs } from "../../../../styles/variables";
import { colors } from "../../../../styles/theme";

export const ServicesSection = styled.section`
  padding: ${spContainer.mdSpacing} 0 ${sp.xlSpacing};
  background: linear-gradient(279.85deg, ${colors.white} 0%, #faf5f2 100%);
  margin-top: ${spContainer.xlSpacing};

  position: relative;
  @media ${bd.lg} {
    margin-top: ${spContainer.lgSpacing};
    padding: ${sp.lgSpacing} 0 ${spContainer.mdSpacing};
  }
`;

export const ServicesTitle = styled.h2`
  text-align: center;
  margin-bottom: calc(${sp.xxxlSpacing} + ${sp.xxmSpacing});
  @media ${bd.lg} {
    margin-bottom: ${sp.lgSpacing};
  }
`;

export const GroupCards = styled.div``;

export const Cards = styled.ol`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: ${sp.lgSpacing};

  @media ${bd.lg} {
    flex-direction: column;
  }
`;

export const CardBody = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: fit-content;

  @media ${b.md} {
    height: 17.875rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: ${fs.fs500};
  font-weight: 500;
  margin-bottom: ${sp.xxmSpacing};

  + * {
    max-width: 47ch;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  @media ${bd.lg} {
    margin-top: ${sp.xmSpacing};
  }
`;

export const UserImg = styled.div`
  display: flex;

  @media ${bd.lg} {
    max-width: 2.5rem;
    aspect-ratio: 1 /1;
  }

  > * {
    border-radius: 50%;
  }
`;

export const UserBody = styled.div`
  margin-left: ${sp.smSpacing};

  @media ${bd.lg} {
    margin-left: ${sp.xxmSpacing};
  }
`;

export const UserName = styled.p`
  font-weight: 500;
`;

export const UserJob = styled.p`
  font-size: ${fs.fs300};
  font-weight: 300;
  @media ${bd.lg} {
    font-size: ${fs.fs200};
  }
`;

export const AllDots = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 11rem;
  @media ${bd.lg} {
    display: none;
  }
`;
