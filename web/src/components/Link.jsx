import styled from 'styled-components';
import { flexbox, space, layout, typography, border, color } from 'styled-system';
import { Link as GatsbyLink } from 'gatsby';

const Link = styled(GatsbyLink).attrs({
  borderRadius: 1,
  border: '1px solid',
  borderColor: 'primary',
  color: 'white',
  p: 1,
  lineHeight: ['1rem']
})`
  background: transparent;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  font: inherit;
  box-sizing: border-box;

  ${flexbox}
  ${space}
  ${layout}
  ${typography}
  ${border}
  ${color}
`;

export default Link;
