import React, { Fragment, useState } from "react";
import { ArrowIcon, NavLabelContainer, NavLink } from "../styles";
import { SDropdown, STreeItem } from "./styles";

function TreeItem({ onSelectCallback, label, children, link }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <STreeItem>
      {link && (
        <NavLink href={link} onClick={onSelectCallback}>
          {label}
        </NavLink>
      )}
      {!link && (
        <NavLabelContainer onClick={() => setIsOpen((p) => !p)}>
          {label}
          <ArrowIcon isOpen={isOpen} />
        </NavLabelContainer>
      )}
      {children && isOpen && <ul role="list">{children}</ul>}
    </STreeItem>
  );
}

export default function Dropdown({ tree, onSelectCallback }) {
  const createTree = (branch) => (
    <TreeItem
      onSelectCallback={onSelectCallback}
      label={branch.label}
      link={branch.link}
    >
      {branch?.branches?.map((branch, index) => (
        <Fragment key={index}>{createTree(branch)}</Fragment>
      ))}
    </TreeItem>
  );

  return (
    <SDropdown role="list">
      {tree.map((branch, index) => (
        <Fragment key={index + 1}>{createTree(branch)}</Fragment>
      ))}
    </SDropdown>
  );
}
