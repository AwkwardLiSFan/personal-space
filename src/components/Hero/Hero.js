import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there, <br />
        I'm Soham
      </SectionTitle>
      <SectionText>
        Welcome to my personal website. Here, you can find information on some of the projects I've completed and check out my writing too! Feel free to visit my LinkedIn if you want my complete work/educational background.
      </SectionText>
      <Button onClick={() => window.location = "#about"}>Jump To My Story</Button>
    </LeftSection>
  </Section>
);

export default Hero;