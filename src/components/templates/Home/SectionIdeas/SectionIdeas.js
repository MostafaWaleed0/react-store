import React, { useState } from "react";
import { data } from "./data";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
  Accordion,
  Dropdown,
  IdeaTitle,
  IdeaText,
  Card,
  CardHeader,
  SectionIdeaInner,
  IdeaLink,
  IdeaImg,
} from "./styles";
import img from "../../../../img/image-5.webp";
import { Wrapper } from "../../../../styles/util";
import Image from "next/image";
import Link from "next/Link";

export default function SectionIdeas() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <section>
      <Wrapper>
        <SectionIdeaInner>
          <article>
            <IdeaTitle>Visualize your ideas with us</IdeaTitle>
            <IdeaText>
              We are ready to help you build and also realize the room design
              that you dream of, with our experts and also the best category
              recommendations from us
            </IdeaText>
            <IconContext.Provider value={{ size: "1rem" }}>
              <Accordion role="list">
                {data.map((item, index) => {
                  return (
                    <Card key={index + 1}>
                      <CardHeader
                        onClick={() => toggle(index)}
                        aria-expanded={clicked === index ? "true" : "false"}
                      >
                        {item.label}
                        {clicked === index ? <FiMinus /> : <FiPlus />}
                      </CardHeader>
                      {clicked === index ? (
                        <Dropdown>
                          <p>{item.describe}</p>
                        </Dropdown>
                      ) : null}
                    </Card>
                  );
                })}
              </Accordion>
            </IconContext.Provider>
            <Link href="/">
              <IdeaLink>See more category</IdeaLink>
            </Link>
          </article>
          <IdeaImg>
            <Image src={img} alt="" width={870} height={600} />
          </IdeaImg>
        </SectionIdeaInner>
      </Wrapper>
    </section>
  );
}
