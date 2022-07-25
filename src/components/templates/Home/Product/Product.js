import React from "react";
import {
  ProductSection,
  ProductTitle,
  Cards,
  CardTitle,
  CategoryText,
  PriceText,
  Stars,
} from "./styles";
import { data } from "./data";
import { Wrapper } from "../../../../styles/util";
import Image from "next/image";

export default function Product() {
  return (
    <ProductSection>
      <Wrapper>
        <ProductTitle>Featured Product</ProductTitle>
        <Cards role="list">
          {data.map((item, index) => {
            return (
              <li key={index + 1}>
                <Image src={item.image} width={425} height={400} alt="" />
                <CardTitle>{item.product}</CardTitle>
                <CategoryText>{item.category}</CategoryText>
                <Stars>
                  <Image
                    src={item.stars}
                    width={100}
                    height={15}
                    alt=""
                  ></Image>
                </Stars>
                <PriceText>{item.price}</PriceText>
              </li>
            );
          })}
        </Cards>
      </Wrapper>
    </ProductSection>
  );
}
