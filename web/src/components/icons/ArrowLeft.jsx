import React from 'react';
import styled from 'styled-components';
import { space, border, color } from 'styled-system';

const SVG = styled.svg`
  ${space}
  ${border}
  ${color}
`;

const ArrowLeft = props => (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 13.8" {...props}>
    <g
      fill="none"
      stroke="#fff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <path d="M20.1 1.4l5 5.5-5 5.4" />
      <path d="M25 6.9H1" />
    </g>
  </SVG>
);

export default ArrowLeft;
