import React from 'react';
import { DiFirebase, DiHtml5, DiResponsive, DiUnitySmall, DiZend } from 'react-icons/di';
import {FiFigma} from 'react-icons/fi'; 
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "tech">
    <SectionDivider />
    <br />
    <SectionTitle> Skills </SectionTitle>
    <SectionText> I'm familiar with both front-end and back-end web design. I have experience with agile software development and using Jira.<br /> Through volunteering, I have gained experience in WordPress, digital marketing and content writing too. I'm also a hobbyist game dev and writer. </SectionText>
    <List>
      <ListItem>
        <DiHtml5 size = "3rem" />
        <ListContainer>
          <ListTitle> Front-End </ListTitle>
          <ListParagraph>
            HTML/CSS <br />
            JavaScript <br />
            Vue.js <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <DiFirebase size = "3rem" />
        <ListContainer>
          <ListTitle> Back-End </ListTitle>
          <ListParagraph>
            Node.js <br />
            Express.js <br />
            MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size = "3rem" />
        <ListContainer>
          <ListTitle> UI/UX </ListTitle>
          <ListParagraph>
            Figma <br />
            Adobe XD <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <DiUnitySmall size = "3rem" />
        <ListContainer>
          <ListTitle> Game Dev </ListTitle>
          <ListParagraph>
            Unity <br />
            - Particle Systems <br />
            - C# Scripting <br />
            - Level design <br />
            Blender <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>

);

export default Technologies;
