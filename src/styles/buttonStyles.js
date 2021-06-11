
const buttonStyles = (props) => {
  return `
    background-color: ${props.disabled ? '#a0a0a0' : props.bgColor ? props.bgColor : props.black ? '#000000' : "#ffffff"
    };
    color: ${props.color || props.black ? "#ffffff" : '#000000'};
    height: ${props.ht || '48px'};
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    border-radius: 6px;
    padding: ${props.pad || '0 24px'};

    ${props.shadow && `
      box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.2);
      elevation: 8;
    `};
    ${props.bordered && `border: 1px solid ${props.borderColor || '#e0e0e0'}`};
    ${props.marg && `margin: ${props.marg}`};
    ${props.secondary && `border-radius: 16px;`};
    ${props.textButton && `background-color: transparent;`};
    ${props.fullWid && `width: 100%;`};
    ${props.wid && `width: ${props.wid};`};
    ${props.hasRadius && `border-radius: ${props.hasRadius};`};
    ${props.bg && `background-color: ${props.disabled ? '#a0a0a0' : props.bg};`};
  `
}

export default buttonStyles