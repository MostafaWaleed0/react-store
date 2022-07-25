import styled from "styled-components";

import { sp, b, bd } from "../../../styles/variables";
import { colors } from "../../../styles/theme";

import { IoMdArrowDropdown } from "react-icons/io";

export const SNav = styled.nav`
  width: auto;
  @media ${bd.md} {
    position: absolute;
    top: ${sp.xxlSpacing};
    left: ${({ menuOpen }) => (!menuOpen ? 0 : "100%")};
    z-index: 999;
    background: ${colors.white};
    width: 100%;
    padding: ${sp.lgSpacing};
  }
`;

export const Ul = styled.ul`
  padding: ${sp.mdSpacing};
  margin: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  column-gap: ${sp.xlSpacing};
  color: ${colors.black};

  @media ${b.md} {
    flex-direction: row;
    align-items: center;
    background: none;
    height: 100%;
    color: ${colors.white};
  }
`;

export const NavLinkContainer = styled.li`
  position: relative;
  user-select: none;
  margin-bottom: ${sp.mdSpacing};

  @media ${b.md} {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }
`;

export const NavLink = styled.a`
  color: inherit;
`;

export const ArrowIcon = styled(IoMdArrowDropdown)`
  margin-left: 4px;
  transform: ${({ isOpen }) => (!isOpen ? "rotate(-90deg)" : "none")};
`;

export const NavLabelContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
