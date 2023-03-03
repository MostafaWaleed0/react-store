import React, { useState } from "react";
import Dropdown from "./Dropdown/Dropdown";
import {
  ArrowIcon,
  SNav,
  Ul,
  NavLabelContainer,
  NavLink,
  NavLinkContainer,
} from "./styles";
import { data } from "./data";

export default function Nav({ navLinks, menuToggleHandler, menuOpen }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const openDropdownHandler = (label) => {
    if (label === openDropdown) return setOpenDropdown(null);
    setOpenDropdown(label);
  };

  const onSelectCallback = () => {
    if (menuToggleHandler) menuToggleHandler();
    setOpenDropdown(null);
  };

  return (
    <SNav aria-label="primary" tabIndex={-1} menuOpen={menuOpen}>
      <Ul role="list">
        {data.map(({ label, link, tree }, index) => {
          const isOpen = openDropdown === label;
          return (
            <NavLinkContainer key={index + 1}>
              {link && <NavLink href={link}>{label}</NavLink>}
              {!link && (
                <NavLabelContainer onClick={() => openDropdownHandler(label)}>
                  {label}
                  <ArrowIcon isOpen={isOpen} />
                </NavLabelContainer>
              )}
              {isOpen && (
                <Dropdown tree={tree} onSelectCallback={onSelectCallback} />
              )}
            </NavLinkContainer>
          );
        })}
      </Ul>
    </SNav>
  );
}
