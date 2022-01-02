import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiOutlineGlobal, AiOutlineMail } from 'react-icons/ai';
import { SectionText, SectionTitle } from '../../styles/GlobalComponents';


import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      
      <hr />
      <br />
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href="mailto:soham.sevak@gmail.com">
            <AiOutlineMail size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://github.com/awkwardlisfan" target="_blank">
          <AiFillGithub size = "3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/soham-sevak" target="_blank">
            <AiFillLinkedin size = "3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/somewhat_funny" target="_blank">
          <AiFillTwitterCircle size = "3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.gamerswaypoint.com/author/awkwardlisfan/" target="_blank">
            <AiOutlineGlobal size = "3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
