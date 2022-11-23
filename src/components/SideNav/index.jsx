import Logo from '../Logo';
import React from 'react';
import styled from 'styled-components/macro';

import wallet from './wallet.svg';
import market from './market.svg';
import portfolio from './portfolio.svg';
import analytics from './analytics.svg';
import history from './history.svg';
import news from './news.svg';
import settings from './settings.svg';
import dashboard from './dashboard.svg';
import { WEIGHTS, COLORS } from '../../constants';
import logo from '../Logo/Vector.svg';
import arrow_right from './arrow_right.svg';
export default function SideNav() {
  return (
    <Wrapper>
      <Logo />
      <Nav>
        <NavLink className='selected'>
          <NavLinkLogo>
            <img src={dashboard} alt='' />
          </NavLinkLogo>
          <p>Dashboard</p>
        </NavLink>
        <NavLink>
          <NavLinkLogo>
            <img src={wallet} alt='' />
          </NavLinkLogo>
          <p>My Wallet</p>
        </NavLink>

        <NavLink>
          <NavLinkLogo>
            <img src={market} alt='' />
          </NavLinkLogo>
          <p>Market</p>
        </NavLink>
        <NavLink>
          <NavLinkLogo>
            <img src={portfolio} alt='' />
          </NavLinkLogo>
          <p>Portfolio</p>
        </NavLink>
        <NavLink>
          <NavLinkLogo>
            <img src={analytics} alt='' />
          </NavLinkLogo>
          <p>Analytics</p>
        </NavLink>
        <NavLink>
          <NavLinkLogo>
            <img src={history} alt='' />
          </NavLinkLogo>
          <p>History</p>
        </NavLink>
        <NavLink>
          <NavLinkLogo>
            <img src={news} alt='' />
          </NavLinkLogo>
          <p>News</p>
        </NavLink>
        <NavLink>
          <NavLinkLogo>
            <img src={settings} alt='' />
          </NavLinkLogo>
          <p>Settings</p>
        </NavLink>
      </Nav>
      <NavFooterSection>
        <div>
          <img src={logo} alt='' />
        </div>

        <p>CoinBasket</p>
        <p>Simple crypto trading platform for everyone. Powered by HSRA.</p>
        <NavFooterLink href='/'>
          Learn More <img src={arrow_right} alt='' />
        </NavFooterLink>
      </NavFooterSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex-basis: 300px;
  /* border: 1px solid white; */
  display: flex;
  flex-direction: column;
  gap: 58px;
`;

const Nav = styled.nav`
  width: 190px;
  height: 470px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const NavLinkLogo = styled.div`
  padding: 4px 18px;
  width: 56px;
`;

const NavLink = styled.a`
  height: 40px;
  display: flex;
  gap: 17px;
  text-decoration: none;
  font-weight: ${WEIGHTS.normal};
  font-size: ${14 / 16}rem;
  line-height: 21px;
  text-align: center;

  &.selected {
    color: ${COLORS.neonGreen};
    font-size: ${18 / 16}rem;
    line-height: 21px;
  }
  &.selected ${NavLinkLogo} {
    /* background: #cdff65;
    opacity: 0.2;
    backdrop-filter: blur(12.5px); */
  }
`;

const NavFooterSection = styled.section`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 54px;
  color: hsla(0, 0%, 59%, 1);
  line-height: 21px;
  gap: 11px;
`;

const NavFooterLink = styled.a`
  color: hsla(79, 100%, 70%, 1);
  text-decoration: none;
`;
