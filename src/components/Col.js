
import styled, { css } from 'styled-components'
import { colStyles } from '../styles'

const Col = styled.View`
  ${(props) => colStyles(props, css)}
  ${(props) =>
    props.borderTop &&
    `border-top-color: ${props.borderTop}; border-top-width: 1px`};
  ${(props) =>
    props.borderBottom &&
    `border-bottom-color: ${props.borderBottom}; border-bottom-width: 1px`};
    
    `;


export default Col