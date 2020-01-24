import styled from 'styled-components';
import { flexbox, space, layout, typography, border, color } from 'styled-system';

const Button = styled.button.attrs({
  borderRadius: 1,
  border: '1px solid',
  borderColor: 'primary',
  color: 'white',
  p: 1,
  lineHeight: ['1rem']
})`
  background: transparent;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  font: inherit;
  box-sizing: border-box;

  &:hover,
  &:focus {
  }

  &:focus {
    outline: none;
  }
  ${flexbox}
  ${space}
  ${layout}
  ${typography}
  ${border}
  ${color}
`;

export default Button;
