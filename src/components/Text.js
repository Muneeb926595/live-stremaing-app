import styled from 'styled-components'

const MyText = styled.Text`
  ${(props) => props.h1 &&
    `
    font-size: 34px;
    color: #000;
    ${(props) => props}
  `
  };
  ${(props) => props.h2 &&
    `
    font-size: 28px;
    color: #000;
    ${(props) => props}
  `
  };
  ${(props) => props.body16 &&
    `
    font-size: 16px;
    color: #000;
    ${(props) => props}
  `
  };
  ${(props) => props.body17 &&
    `
    font-size: 16px;
    color: #000;
    ${(props) => props}
  `
  };

  background-color: transparent;
  color:  ${(props) => props.color ? props.color : '#000000'};
  ${(props) => props.position && `position: ${props.position}`};
  ${(props) => props.posLeft && `left: ${props.posLeft}`};
  ${(props) => props.posRight && `right: ${props.posRight}`};
  ${(props) => props.posTop && `top: ${props.posTop}`};
  ${(props) => props.posBottom && `bottom: ${props.posBottom}`};
  ${(props) => props.weight && `font-weight: ${props.weight}`};
  ${(props) => props.size && `font-size: ${props.size}`};
  ${(props) => props.center && `text-align: center`};
  ${(props) => props.right && `text-align: right`};
  ${(props) => props.left && `text-align: left`};
  ${(props) => props.marg && `margin: ${props.marg}`};
  ${(props) => props.pad && `padding: ${props.pad}`};
  ${(props) => props.wid && `width: ${props.wid}`};
  ${(props) => props.spacing && `letter-spacing: ${props.spacing}`};
  ${(props) => props.textTransform && `text-transform: ${props.textTransform}`};
  ${(props) => props.textDecorationLine &&
    `text-decoration-line: ${props.textDecorationLine}`
  };

    `
export default MyText
