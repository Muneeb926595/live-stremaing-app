const boxStyles = (props) => {
  return `
    ${props.marg && `margin: ${props.marg}`};
    ${props.pad && `padding: ${props.pad}`};
    ${props.bg && `background-color: ${props.bg}`};
    ${props.ht && `height: ${props.ht}`};
    ${props.maxHt && `max-height: ${props.maxHt}`};
    ${props.wid && `width: ${props.wid}`};
    ${props.minWid && `min-width: ${props.minWid}`};
    ${props.hasRadius && `border-radius: ${props.hasRadius}`};
    ${props.hasShadow && `box-shadow: ${props.hasShadow}`};
    ${props.alignSelf && `align-self: ${props.alignSelf}`};
    ${props.border && `border: ${props.border}`};
    ${props.centerAll &&
    `
      align-items: center;
      justify-content: center;
    `
    };
    ${props.center &&
    `
      align-items: center;
    `
    };

    ${props.absolute && `position: absolute;`};
    ${props.top && `top: ${props.top};`};
    ${props.bottom && `bottom: ${props.bottom};`};
    ${props.right && `right: ${props.right};`};
    ${props.left && `left: ${props.left};`};
    ${props.zIndex && `z-index: ${props.zIndex};`};
    ${props.flex && `display: flex;`};
    ${props.overflow && `overflow:${props.overflow};`};
    ${props.overflowX && `overflow-x:${props.overflowX};`};
    ${props.overflowY && `overflow-y:${props.overflowY};`};
  `
}

export default boxStyles