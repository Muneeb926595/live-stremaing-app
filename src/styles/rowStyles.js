const rowStyles = (props) => {
  return `
    flex-direction: row;
    background-color: ${props.bg || 'transparent'};

    ${props.centerAll &&
    `
      justify-content: center;
      align-items: center;
    `
    };

    ${props.center &&
    `
      align-items: center;
    `
    };

    ${props.between && `justify-content: space-between;`};
    ${props.around && `justify-content: space-around;`};
    ${props.evenly && `justify-content: space-evenly;`};
    ${props.end && `align-self: flex-end;`};
    ${props.start && `align-self: flex-start;`};
    ${props.selfStart && `align-self: flex-start;`};
    ${props.endAll && `justify-content: flex-end`};
    ${props.wid && `width: ${props.wid}`};
    ${props.minWid && `min-width: ${props.minWid}`};
    ${props.maxWid && `max-width: ${props.maxWid}`};
    ${props.startAll &&
    `
      justify-content: flex-start;
      align-items: flex-start;
    `
    };
    ${props.itemsStart &&
    `
      align-items: flex-start;
    `
    };
    ${props.marg && `margin: ${props.marg}`};
    ${props.pad && `padding: ${props.pad}`};
    ${props.bg && `background-color: ${props.bg}`};
    ${props.ht && `height: ${props.ht}`};
    ${!props.noFlex && `flex: 1`};
    ${props.wrap && `flex-wrap: wrap`};
    ${props.hasBorder && `border: ${props.hasBorder}`};
    ${props.hasBorderBottom && `border-bottom: ${props.hasBorderBottom}`};
    ${props.hasRadius && `border-radius: ${props.hasRadius}`};
    ${props.absolute && `position: absolute;`};
    ${props.relative && `position: relative;`};
    ${props.top && `top: ${props.top};`};
    ${props.bottom && `bottom: ${props.bottom};`};
    ${props.right && `right: ${props.right};`};
    ${props.hasShadow && `box-shadow: ${props.hasShadow}`};
    ${props.hiddenOverflow && `overflow: hidden;`};
    ${props.borderBottom && `border-bottom: ${props.borderBottom};`}
    ${props.borderTop && `border-top: ${props.borderTop};`}
    ${props.position && `position: ${props.position};`}
    ${props.minHt && `min-height: ${props.minHt};`}
    ${props.zIndex && `z-index: ${props.zIndex};`}
  `
}

export default rowStyles