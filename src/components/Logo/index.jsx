import { WEIGHTS } from '../../constants';
import React from 'react';
import styled from 'styled-components/macro';
import logo from './Vector.svg';
export default function Logo(props) {
  return (
    <Link href='/'>
      <Wrapper {...props}>
        <img src={logo} alt='' />
        <h1>
          Coin<Basket>Basket</Basket>
        </h1>
      </Wrapper>
    </Link>
  );
}

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.div`
  font-size: ${22 / 16}rem;
  font-weight: ${WEIGHTS.bold};
  line-height: 33px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Basket = styled.span`
  font-weight: ${WEIGHTS.normal};
`;
