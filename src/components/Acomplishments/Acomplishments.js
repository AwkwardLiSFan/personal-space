import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 'Jan \'22', text: 'The Rusting Birthday', link: "https://thisisnotagamereview.blogspot.com/2022/01/the-rusting-birthday.html"},
  { number: 'Jan \'22', text: 'Rohinton Mistry\'s Family Matters: An Emotional Tour-de-Force', link: "https://thisisnotagamereview.blogspot.com/2022/01/rohinton-mistrys-family-matters.html"},
  { number: 'Dec \'21', text: 'What Open-World Games Can Learn from Horizon: Zero Dawn\'s Collectibles', link: "https://www.gamerswaypoint.com/open-world-games-learn-from-horizon-zero-dawn-collectibles/"},
  { number: 'Nov \'21', text: 'Witcher 3: War, Speciesism, and the Beauty of Long Form Storytelling', link: "https://www.gamerswaypoint.com/witcher-3-war-speciesism-beauty-of-long-form-storytelling/"}
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
