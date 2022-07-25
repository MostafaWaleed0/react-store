import styled from "styled-components";
import { bd, fs, spContainer, sp } from "../../../../styles/variables";
import { colors } from "../../../../styles/theme";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${spContainer.xlSpacing};
  column-gap: ${sp.xlSpacing};

  @media ${bd.lg} {
    flex-direction: column;
    margin-top: ${spContainer.lgSpacing};
  }
`;

export const Img = styled.div`
  @media ${bd.lg} {
    margin-bottom: ${sp.lgSpacing};
    height: fit-content;
  }

  > * {
    border-radius: 3.75rem 3.75rem 3.75rem 0;

    @media ${bd.lg} {
      border-radius: 1.25rem 1.25rem 1.25rem 0;
    }
  }
`;

export const ContactTitle = styled.h2`
  margin-bottom: ${sp.smSpacing};
`;

export const Paragraph = styled.p`
  margin-bottom: ${sp.lgSpacing};
`;

export const InputBox = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  max-width: clamp(17.5rem, calc(15.66rem + 7.83vw), 25rem);
  height: clamp(2.38rem, calc(2.04rem + 1.44vw), 3.75rem);
  background: #fefcfb;
  border-radius: 9999px;
  padding: ${sp.xxmSpacing};
  border: 1px solid ${colors.palePink};
`;

export const InputEmail = styled.input`
  border: 0;
  outline: 0;
  font-size: ${fs.fs300};
  color: ${colors.wewak};
  background-color: transparent;
  padding-left: ${sp.xxmSpacing};
  width: 100%;
  height: 100%;
`;

export const ButtonEmail = styled.button`
  border: 0;
  outline: 0;
  display: grid;
  place-items: center;
  border-radius: 50%;
  aspect-ratio: 1/ 1;
  height: clamp(1.75rem, calc(1.51rem + 1.04vw), 2.75rem);
  background: ${colors.palePink};
  color: ${colors.wewak};
  cursor: pointer;
`;
