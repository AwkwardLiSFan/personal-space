import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

/*const projectsList = [{
  title: 'Project 1',
  description: 'This is a really long description about my project'
},{
  title: 'Project 2',
  description: 'This is a really long description about my project'
},{
  title: 'Project 3',
  description: 'This is a really long description about my project'
},{
  title: 'Project 4',
  description: 'This is a really long description about my project'
}];
*/

const Projects = () => (
  <Section nopadding id = "projects">
    <SectionDivider />
    <SectionTitle main> Projects </SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
        <BlogCard key = {id}>
          <Img src = {image} />
          <TitleContent>
            <HeaderThree> {title} </HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>
           {description} 
          </CardInfo>
          <Hr />
          <div>
            <TitleContent> Tags </TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key = {i}> {tag} </Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href = {visit} target = "_blank"> Learn More </ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>

  </Section>
);

export default Projects;