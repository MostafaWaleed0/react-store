import React from "react";
import { data } from "./data";
import {
  ServicesSection,
  ServicesTitle,
  GroupCards,
  Cards,
  CardBody,
  CardTitle,
  User,
  UserImg,
  UserBody,
  UserName,
  UserJob,
  AllDots,
} from "./styles";
import { Wrapper } from "../../../../styles/util";
import Image from "next/image";
import { useSelector } from "react-redux";
import Dot from "../../../Dot";

export default function Opinions() {
  const slideIndex = useSelector((state) => state.ui.slideIndex);

  return (
    <ServicesSection>
      <Wrapper>
        <ServicesTitle>What they say about our services</ServicesTitle>
        <GroupCards>
          {data.map((slides, index) => {
            return (
              <Cards
                role="list"
                key={index + 1}
                style={slideIndex === index ? {} : { display: "none" }}
              >
                {slides.map((slide, index) => {
                  return (
                    <li key={index + 1}>
                      <CardBody>
                        <div>
                          <CardTitle>{slide.title}</CardTitle>
                          <p>{slide.text}</p>
                        </div>
                        <User>
                          <UserImg>
                            <Image
                              src={slide.urls}
                              width={60}
                              height={60}
                              alt=""
                            />
                          </UserImg>
                          <UserBody>
                            <UserName>{slide.name}</UserName>
                            <UserJob>{slide.job}</UserJob>
                          </UserBody>
                        </User>
                      </CardBody>
                    </li>
                  );
                })}
              </Cards>
            );
          })}
        </GroupCards>
        <AllDots role="list">
          {data.map((slide, index) => {
            return <Dot index={index} />;
          })}
        </AllDots>
      </Wrapper>
    </ServicesSection>
  );
}
