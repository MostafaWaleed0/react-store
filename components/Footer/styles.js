import styled from "styled-components";
import { sp, fs, bd, spContainer } from "../../styles/variables";
import { colors } from "../../styles/theme";

export const SFooter = styled.footer`
  background: linear-gradient(275.58deg, ${colors.black} 0%, #4b4b4b 100%);
  color: ${colors.white};
  margin-top: ${spContainer.xlSpacing};
  padding: ${spContainer.lgSpacing} 0 ${sp.lgSpacing};

  @media ${bd.md} {
    padding: ${sp.smSpacing} 0 ${sp.mdSpacing};
    margin-top: ${spContainer.lgSpacing};
  }
`;
export const FooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: ${spContainer.xlSpacing};
  @media ${bd.md} {
    padding-bottom: ${spContainer.lgSpacing};
  }
`;
export const FooterImage = styled.div`
  margin: 0 ${sp.xlSpacing} ${sp.lgSpacing} 0;
  @media ${bd.lg} {
    width: 7.75rem;
    height: 2.25rem;
  }
`;
export const GroupLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 ${sp.xlSpacing} ${sp.lgSpacing} 0;
`;
export const LinksTitle = styled.h3`
  font-size: ${fs.fs500};
  font-weight: 500;
  line-height: 1.5em;
  color: ${colors.palePink};
  margin-bottom: ${sp.smSpacing};
`;
export const Li = styled.li`
  :not(:last-of-type) {
    margin-bottom: ${sp.mdSpacing};
  }
`;
export const SLink = styled.a`
  color: inherit;
`;
export const Copyright = styled.p`
  line-height: 1.125em;
  text-align: center;
  margin-inline: auto;
`;
