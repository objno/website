import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  height: 1.5rem;
`;

const Logo = props => (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39" {...props}>
    <g>
      <path fill="#ef422c" d="M0 0h39v39H0z" />
    </g>
    <path
      fill="#fff"
      d="M19.5 30a10.5 10.5 0 01-4-20.2 10.5 10.5 0 018 19.4 10.4 10.4 0 01-4 .8zm0-16.8a6.3 6.3 0 106.3 6.3 6.3 6.3 0 00-6.3-6.3z"
    />
  </SVG>
);

export default Logo;
