import styled from 'styled-components';
import {rowStyles} from '../styles';

const Row = styled.View`
  ${(props) => rowStyles(props)};
`;

export default Row;
