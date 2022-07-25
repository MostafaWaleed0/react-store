import styled from "styled-components";
import { sp, bd, spContainer } from "../../../../styles/variables";
import { colors } from "../../../../styles/theme";

export const SectionIdeaInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: ${sp.xlSpacing};
  margin-top: ${spContainer.xlSpacing};

  @media ${bd.lg} {
    flex-direction: column-reverse;
    margin-top: ${spContainer.lgSpacing};
  }
`;
export const IdeaTitle = styled.h2`
  margin-bottom: ${sp.smSpacing};
`;

export const IdeaText = styled.p`
  margin-bottom: ${sp.smSpacing};
`;

export const Accordion = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 49.5625rem;
`;

export const Card = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${sp.smSpacing};
`;

export const CardHeader = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;

  > * {
    color: ${colors.wewak};
  }
`;

export const Dropdown = styled.div`
  width: 100%;
  padding-block: ${sp.smSpacing};

  > * {
    font-weight: 300;
  }
`;

export const IdeaLink = styled.a`
  color: ${colors.wewak};
`;

export const IdeaImg = styled.div`
  @media ${bd.lg} {
    margin-bottom: ${sp.xxxlSpacing};
    height: fit-content;
  }

  > * {
    border-radius: 3.75rem 3.75rem 0px 3.75rem;

    @media ${bd.lg} {
      border-radius: 1.25rem 1.25rem 0px 1.25rem;
    }
  }
`;
