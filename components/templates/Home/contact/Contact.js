import React from "react";
import { Wrapper } from "../../../../styles/util";
import {
  ContactContainer,
  ContactTitle,
  Paragraph,
  Img,
  InputBox,
  InputEmail,
  ButtonEmail,
} from "./styles";
import { IoIosArrowForward } from "react-icons/io";

import img from "../../../../img/image-11.webp";
import Image from "next/image";

export default function Contact() {
  return (
    <Wrapper>
      <ContactContainer>
        <Img>
          <Image src={img} alt="" width={870} height={600} />
        </Img>
        <article>
          <ContactTitle>Make your room feel homey</ContactTitle>
          <Paragraph>
            We help people not only to make the room at home better, but we help
            people to feel a more homey and comfortable room, you don&rsquo;t
            have to worry about the result because of these interiors are made
            by people who are professionals in their dields with an elegant and
            lucuriois style and with premium quality materials
          </Paragraph>
          <Paragraph>
            Contact us if you are interested in working with us
          </Paragraph>
          <InputBox>
            <InputEmail type="search" placeholder="Insert your email address" />
            <ButtonEmail>
              <IoIosArrowForward />
            </ButtonEmail>
          </InputBox>
        </article>
      </ContactContainer>
    </Wrapper>
  );
}
