import styled from 'styled-components';
import {
  compose,
  flexbox,
  space,
  layout,
  typography,
  border,
  color,
  grid
} from 'styled-system';

const Box = styled.div(
  compose(
    flexbox,
    space,
    layout,
    typography,
    border,
    color,
    grid
  )
);

export default Box;
