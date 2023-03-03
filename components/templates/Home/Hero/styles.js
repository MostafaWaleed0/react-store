import styled from "styled-components";
import { sp, fs, b, spContainer, bd } from "../../../../styles/variables";
import { colors } from "../../../../styles/theme";
import Image from "next/image";

export const SliderContainer = styled.div`
  position: relative;
  z-index: 10;
  height: 100vh;
  width: 100%;
  margin: auto;
  overflow: hidden;

  @media ${bd.sm} {
    height: 25.375rem;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${colors.black02};
  }
`;

export const Slides = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  text-align: center;

  @media ${bd.sm} {
    height: 25.375rem;
  }
`;

export const SlideImage = styled(Image)`
  position: absolute;
  z-index: -1;
`;

export const SlideTitle = styled.h1`
  margin: calc(${sp.xlSpacing} + ${sp.lgSpacing}) auto 0;
  @media ${b.md} {
    margin: calc(${spContainer.xlSpacing} + ${sp.lgSpacing}) auto 0;
  }
`;

export const SlideText = styled.p`
  color: ${colors.white};
  margin: ${sp.smSpacing} auto 0;
  max-width: min(68vw, 50ch);
  @media ${b.lg} {
    margin: ${sp.lgSpacing} auto 0;
  }
`;

export const SearchBox = styled.form`
  display: flex;
  align-items: center;
  overflow: hidden;
  max-width: clamp(17.5rem, calc(16.28rem + 5.22vw), 22.5rem);
  height: clamp(2.38rem, calc(2.04rem + 1.44vw), 3.75rem);
  border-radius: 9999px;
  border: 1px solid ${colors.white};
  background-color: ${colors.white05};
  padding: 0 ${sp.xxmSpacing} 0 ${sp.smSpacing};
  margin: ${sp.xlSpacing} auto;

  @media ${bd.md} {
    padding: 0 ${sp.xxmSpacing} 0 0.3125rem;
    margin: ${sp.smSpacing} auto;
  }
`;

export const InputSearch = styled.input`
  border: 0;
  outline: 0;
  font-size: ${fs.fs300};
  font-weight: 500;
  color: ${colors.white};
  width: 100%;
  height: 100%;
  background-color: transparent;

  ::placeholder {
    color: ${colors.white};
  }
`;

export const ButtonSearch = styled.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 2.375rem;
  aspect-ratio: 1/ 1;

  background-color: ${colors.white};
  cursor: pointer;

  @media ${bd.md} {
    height: 1.75rem;
    padding: 2px;
  }

  > * {
    fill: #a09386;
  }
`;

export const AllDots = styled.ul`
  position: absolute;
  bottom: ${sp.xlSpacing};
  z-index: 200;
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;

  @media ${bd.md} {
    bottom: ${sp.smSpacing};
  }
`;
