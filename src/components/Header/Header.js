import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineSmile, AiOutlineFrown, AiFillLinkedin, AiFillPlaySquare, AiOutlineGlobal } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href = "/">
        <a style = {{display: "flex", alignItems: "center", color: 'white', marginBottom: '20px'}}>
          <AiOutlineSmile size = "3rem"/> <Span> Personal Space </Span> <AiOutlineFrown size = "3rem"/>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
          <Link href = "#projects">
            <NavLink> Projects </NavLink>
          </Link>
      </li>
      <li>
          <Link href = "#tech">
            <NavLink> Skills </NavLink>
          </Link>
      </li>
      <li>
          <Link href = "#writings">
            <NavLink> Writing </NavLink>
          </Link>
      </li> 
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com/awkwardlisfan" target="_blank">
        <AiFillGithub size = "3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/soham-sevak" target="_blank">
        <AiFillLinkedin size = "3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.gamerswaypoint.com/author/awkwardlisfan/" target="_blank">
        <AiOutlineGlobal size = "3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
