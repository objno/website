import styled from 'styled-components';
import {
  flexbox,
  space,
  layout,
  typography,
  border,
  color
} from 'styled-system';

const Flex = styled.div`
  display: flex;
  ${flexbox}
  ${space}
  ${layout}
  ${typography}
  ${border}
  ${color}
`;

export default Flex;
