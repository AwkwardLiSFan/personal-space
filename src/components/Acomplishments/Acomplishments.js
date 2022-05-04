import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 'Jan \'22', text: 'A Suitable Boy - Vikram Seth', link: "https://thisisnotagamereview.blogspot.com/2022/05/a-suitable-boy-vikram-seth.html"},
  { number: 'Apr \'22', text: 'God of War (2018) Story Analysis', link: "https://www.gamerswaypoint.com/god-of-war-2018-story-analysis/"},
  { number: 'Mar \'22', text: 'Martha is Dead Story Analysis', link: "https://www.gamerswaypoint.com/martha-is-dead-story-analysis/"},
  { number: 'Mar \'22', text: 'Martha is Dead - gorgeous visuals a good game do not make', link: "https://www.gamerswaypoint.com/martha-is-dead-review-gorgeous-visuals-a-good-game-do-not-make/"}
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
