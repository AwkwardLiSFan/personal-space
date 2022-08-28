import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 'Aug \'22', text: 'As Dusk Falls Review – a gripping family/crime drama', link: "https://www.gamerswaypoint.com/as-dusk-falls-review-a-gripping-family-crime-drama/"},
  { number: 'Aug \'22', text: 'Syberia: The World Before Review – You Can Never Go Home Again', link: "https://www.gamerswaypoint.com/syberia-the-world-before-review-you-can-never-go-home-again/"},
  { number: 'Jul \'22', text: 'Outlast (2013): Story Summary', link: "https://www.gamerswaypoint.com/outlast-2013-story-summary/"},
  { number: 'Jul \'22', text: 'Disco Elysium Analysis: Politics, Free Will and a Haunting Past', link: "https://www.gamerswaypoint.com/disco-elysium-analysis-politics-free-will-haunting-past/"}
];

const Acomplishments = () => (
  <Section id = "writings">
    <SectionDivider />
    <br />
    <SectionTitle> Writing </SectionTitle>
    <br/>
    <SectionText> <i> “We write to taste life twice, in the moment and in retrospect.” <br /> ― Anais Nin </i><br /><br />
    I write about a variety of things: the games I play, the books I read and life in general. Some of it will be on my old blog, while all things gaming will be over at Gamer's Waypoint. Links to the most recent pieces below.</SectionText>
    <Boxes>
      {data.map((card, index) => (
        <a href = {card.link} target="_blank">
          <Box key = {index}>
            <BoxNum> {card.number} </BoxNum>
            <BoxText> {card.text} </BoxText>
          </Box>  
        </a>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
