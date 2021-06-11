const colStyles = (props) => {
  return `
    flex-direction: column;

    ${props.startAll &&
    `
      justify-content: flex-start;
      align-items: flex-start;
    `
    };
    
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
    ${props.end && `align-self: flex-end;`};
    ${props.endAll && `justify-content: flex-end`};
    ${props.endHorizontal && `align-items: flex-end`};
    ${props.pad && `padding: ${props.pad}`};
    ${props.bg && `background-color: ${props.bg}`};
    ${!props.noFlex && `flex: 1`};
    ${props.ht && `height: ${props.ht}`};
    ${props.minHt && `min-height: ${props.minHt}`};
    ${props.wid && `width: ${props.wid}`};
    ${props.marg && `margin: ${props.marg}`};
    ${props.wrap && `flex-wrap: wrap`};
    ${props.hasRadius && `border-radius: ${props.hasRadius}`};
    ${props.hasBorder && `border: ${props.hasBorder}`};
    ${props.absolute && `position: absolute;`};
    ${props.relative && `position: relative;`};
    ${props.pointer && `cursor: pointer;`};
  `
}

export default colStyles