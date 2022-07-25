import React from "react";
import { Wrapper } from "../../styles/util";
import logo from "./../../img/Asset.png";
import Link from "next/link";
import Image from "next/image";
import {
  SFooter,
  FooterNav,
  FooterImage,
  GroupLinks,
  LinksTitle,
  Li,
  SLink,
  Copyright,
} from "./styles";
import { data } from "./data";

export default function Footer() {
  return (
    <SFooter>
      <Wrapper>
        <FooterNav aria-label="secondary" tabIndex={-1}>
          <FooterImage>
            <Link href="/">
              <a>
                <Image src={logo} width={238} height={70} alt="" />
              </a>
            </Link>
          </FooterImage>
          {data.map((item, index) => {
            return (
              <GroupLinks key={index + 1}>
                <LinksTitle>{item.label}</LinksTitle>
                <ul role="list">
                  {item.links.map((item, index) => {
                    return (
                      <Li key={index + 1}>
                        <Link href={item.url}>
                          <SLink href={item.url}>{item.name}</SLink>
                        </Link>
                      </Li>
                    );
                  })}
                </ul>
              </GroupLinks>
            );
          })}
        </FooterNav>
        <Copyright>
          Copyright {new Date().getFullYear()} ©shady rhymes
        </Copyright>
      </Wrapper>
    </SFooter>
  );
}
