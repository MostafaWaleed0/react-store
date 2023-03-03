import React from "react";
import {
  Section,
  CardsTitle,
  Cards,
  Card,
  CardTitle,
  CardText,
  CardLink,
  Icon,
} from "./styles";
import { data } from "./data";
import { Wrapper } from "../../../../styles/util";
import Link from "next/Link";
import Image from "next/image";

export default function CardAdvantage() {
  return (
    <Section>
      <Wrapper>
        <CardsTitle>Why Choosing Us</CardsTitle>
        <Cards role="list">
          {data.map((item, index) => (
            <Card key={index + 1}>
              <Icon>
                <Image src={item.image} width={60} height={60} alt="" />
              </Icon>
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.text}</CardText>
              <Link href={item.url}>
                <CardLink>more info</CardLink>
              </Link>
            </Card>
          ))}
        </Cards>
      </Wrapper>
    </Section>
  );
}
