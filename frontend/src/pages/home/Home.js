import React, { useState } from "react";
import { Button, Column } from "../../styles/Essentials.styles";
import {
  HeroColumn,
  HeroGrid,
  HeroImage,
  HeroTextDown,
  HeroTextMain,
  HeroTextUp,
  HeroWrap,
  HighlightColumn,
  HighlightContainer,
  HighlightGrid,
  HighlightHeading,
  HighlightImg,
  HighlightLink,
  HighlightSubtitle,
  HighlightText,
  MoreDetailsColumnHeading,
  MoreDetailsColumnSubtitle,
  MoreDetailsContainer,
  MoreDetailsGrid,
  MoreDetailsHeading,
  MoreDetailsTextColumn,
  MoreDetailsWrap,
} from "../styles/home/Home.styles";

import heroImage from "../../assets/images/hero-image.webp";
import highlightImg1 from "../../assets/images/highlight-1.webp";
import highlightImg2 from "../../assets/images/highlight-2.webp";
import highlightImg3 from "../../assets/images/highlight-3.webp";
import highlightImg4 from "../../assets/images/highlight-4.webp";
import highlightImg5 from "../../assets/images/highlight-5.webp";

import { BsArrowRight } from "react-icons/bs";

export default function Home() {
  const [highlights, setHighlights] = useState([
    {
      image: highlightImg1,
      title: "Stand out with beautiful emails",
      subTitle:
        "Get a head start with a variety of email templates or choose to code your own in our email builder. Our Creative Assistant will even create designs for your emails based on your brand.",
      linkText: "Start building",
    },
    {
      image: highlightImg2,
      title: "Get their attention with click‑worthy content",
      subTitle:
        "Draw your customers in with the right subject lines based on feedback from our Subject Line Helper and keep them reading with content dynamically personalized for them, or try different versions of content with A/B testing.",
      linkText: "Start engaging ",
    },
    {
      image: highlightImg3,
      title: "Let automations deliver the right message for you",
      subTitle:
        "Make your emails more relevant with automated journeys created in our Customer Journey Builder which sends emails based on your customers’ behavior and interactions, delivering better experiences and driving higher engagement.",
      linkText: "Start automating ",
    },
    {
      image: highlightImg4,
      title: "Know that your emails are getting delivered",
      subTitle:
        "Our delivery rate is one of the highest in the industry. We’ll take care of the technical stuff so that you can focus on building relationships with your customers and see a higher return on your efforts.",
      linkText: "Start delivering ",
    },
    {
      image: highlightImg5,
      title: "Turn insights into results",
      subTitle:
        "See what's working in your email campaigns and track your sales with our Reports. Drill down into where people clicked in your emails with Click Maps so you can tailor your content for more engagement.",
      linkText: "Start analyzing ",
    },
  ]);

  return (
    <>
      <HeroWrap>
        <HeroGrid direction="column">
          <HeroColumn direction="column" lg={12}>
            <HeroTextUp>EMAIL MARKETING SOFTWARE</HeroTextUp>
            <HeroTextMain>
              Keep your customers engaged and your business growing
            </HeroTextMain>
            <HeroTextDown>
              Create engaging emails easily in Mailchimp to grow your brand and
              sell more stuff, getting you the most out of your email marketing.
            </HeroTextDown>
            <Button lg style={{ marginTop: "1.875rem" }}>
              Pick A Plan
            </Button>
          </HeroColumn>

          <Column
            style={{ position: "relative" }}
            direction="column"
            lg={8}
            md={10}
            sm={9}
            sx={8}
          >
            <HeroImage src={heroImage} />
          </Column>
        </HeroGrid>
      </HeroWrap>

      {highlights.map((highlight, i) => (
        <HighlightContainer key={i}>
          <HighlightGrid
            direction={i % 2 === 1 ? "row-reverse" : "row"}
            justify="space-between"
          >
            <HighlightColumn md={6} sm={12}>
              <HighlightImg src={highlight.image} />
            </HighlightColumn>
            <HighlightColumn
              direction="column"
              align="flex-start"
              md={6}
              sm={12}
            >
              <HighlightText
                pr={i % 2 === 1 ? true : false}
                pl={i % 2 === 0 ? true : false}
              >
                <HighlightHeading>{highlight.title}</HighlightHeading>
                <HighlightSubtitle>{highlight.subTitle}</HighlightSubtitle>
                <HighlightLink to="#">
                  {highlight.linkText}
                  <BsArrowRight
                    style={{
                      marginLeft: "12px",
                      color: "var(--color-primary)",
                    }}
                  />
                </HighlightLink>
              </HighlightText>
            </HighlightColumn>
          </HighlightGrid>
        </HighlightContainer>
      ))}

      <MoreDetailsWrap>
        <MoreDetailsContainer>
          <MoreDetailsGrid direction="column">
            <Column style={{padding: "55px 0px"}} lg={12} justify="center">
              <MoreDetailsHeading>
                Find new ways to engage your audience easily
              </MoreDetailsHeading>
            </Column>
            <Column wrap="wrap  " style={{padding: "55px 0px"}} lg={12} justify="center">
              <MoreDetailsTextColumn direction="column" md={4} sx={10}>
                <MoreDetailsColumnHeading>
                Surveys
                </MoreDetailsColumnHeading>
                <MoreDetailsColumnSubtitle>
                Learn what your customers need with Mailchimp Surveys and create more targeted campaigns
                </MoreDetailsColumnSubtitle>
              </MoreDetailsTextColumn> 
              <MoreDetailsTextColumn direction="column" md={4} sx={10}>
                <MoreDetailsColumnHeading>
                Integrations
                </MoreDetailsColumnHeading>
                <MoreDetailsColumnSubtitle>
                Boost your email results by connecting your tools through our Integrations
                </MoreDetailsColumnSubtitle>
              </MoreDetailsTextColumn> 
              <MoreDetailsTextColumn direction="column" md={4} sx={10}>
                <MoreDetailsColumnHeading>
                Mobile App

                </MoreDetailsColumnHeading>
                <MoreDetailsColumnSubtitle>
                Design and track your email campaigns anywhere and anytime with our Mobile App
</MoreDetailsColumnSubtitle>
              </MoreDetailsTextColumn> 
            </Column>
          </MoreDetailsGrid>
        </MoreDetailsContainer>
      </MoreDetailsWrap>
    </>
  );
}
