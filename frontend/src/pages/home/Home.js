import React from "react";
import { Button, Column } from "../../styles/Essentials.styles";
import {
  HeroColumn,
  HeroGrid,
  HeroImage,
  HeroTextDown,
  HeroTextMain,
  HeroTextUp,
  HeroWrap,
} from "../styles/home/Home.styles";

import heroImage from '../../assets/images/hero-image.webp';

export default function Home() {
  return (
    <>
      <HeroWrap>
        <HeroGrid direction="column">
          <HeroColumn   direction="column" lg={12}>
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

          <Column style={{position: 'relative'}} direction="column" lg={8} md={10} sm={9} sx={8}>
            <HeroImage src={heroImage} />
          </Column>
        </HeroGrid>
      </HeroWrap>
    </>
  );
}
