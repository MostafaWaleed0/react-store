import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../app/slices/uiSlice";
import storeIcon from "../../img/Bag_fill.png";
import Nav from "./Nav/Nav";
import Image from "next/image";
import logo from "../../img/Asset.png";
import { Wrapper } from "../../styles/util";
import {
  SHeader,
  HeaderInner,
  HeaderBrand,
  MenuToggleButton,
  MenuIcon,
  CloseIcon,
} from "./styles";

export default function Header() {
  const dispatch = useDispatch();
  const { menuOpen } = useSelector((state) => state.ui);

  const menuToggleHandler = () => {
    dispatch(uiActions.menuToggle());
  };

  return (
    <SHeader>
      <Wrapper>
        <HeaderInner>
          <HeaderBrand>
            <Image src={logo} width={119} height={35} alt="" />
          </HeaderBrand>
          <Nav menuOpen={menuOpen} />
          <div>
            <Image src={storeIcon} width={24} height={24} alt="" />
            <MenuToggleButton onClick={menuToggleHandler}>
              {menuOpen ? <MenuIcon /> : <CloseIcon />}
            </MenuToggleButton>
          </div>
        </HeaderInner>
      </Wrapper>
    </SHeader>
  );
}
