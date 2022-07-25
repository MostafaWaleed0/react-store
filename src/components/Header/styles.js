import styled, { css } from "styled-components";
import { sp, b, bd } from "../../styles/variables";
import { colors } from "../../styles/theme";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export const SHeader = styled.header`
  position: absolute;
  top: 0;
  right: 50%;
  z-index: 999;
  transform: translateX(50%);
  width: 100%;
  height: fit-content;
  margin-top: ${sp.lgSpacing};

  @media ${bd.md} {
    margin-top: ${sp.smSpacing};
  }
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderBrand = styled.div`
  @media ${bd.md} {
    width: 5.375rem;
    height: 1.5625rem;
  }
`;

export const MenuToggleButton = styled.button`
  cursor: pointer;

  @media ${b.md} {
    display: none;
  }
`;

export const iconStyles = css`
  display: block;
  width: 100%;
  height: 100%;
  color: ${colors.white};
  margin-left: ${sp.xxmSpacing};
`;

export const MenuIcon = styled(HiMenuAlt3)`
  ${iconStyles}
`;
export const CloseIcon = styled(IoMdClose)`
  ${iconStyles}
`;
