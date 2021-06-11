

const inputStyles = (props, css) => {
  const { marg, danger, rounded, multiline, icon, limit, err, search, weight, ht, wid, containerWid, fontSize } = props
  const container = `
    height: auto;
    margin: ${marg || 0};
    width: ${containerWid ? containerWid : '100%'};

    ${limit && `
      border-radius: 8px;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 65px;
      padding: 0 14px;
      border: 1px solid #e0e0e0;
    `};

    ${limit || icon && err && `
      border: 1px solid red;
    `};

    ${search && `
      backgroundColor: #f6f6f6;
      border: 0;
    `};
  `

  const input = `
    ${props.color ? `color: ${props.color}` : 'color:#000000;'};
    ${props.hasBorder ? `border: ${props.hasBorder}` : 'border:1px solid #0000003b;'};
    ${props.hasRadius ? `border-radius: ${props.hasRadius}` : 'border-radius:8px'};
    width: ${wid ? wid : '100%'};
    height:  ${ht ? ht : '56px;'};
    background-color: #222222;
    padding: 0 12px;
    font-size: ${fontSize ? fontSize : '16px'};
    ${rounded && `
    height: 48px;
    font-size: 16px;
    letter-spacing: 0.12px;
    border-radius: 30px;
    padding: 0 24px;
    background-color: #ffffff;
    border: 1px solid #e0e0e0
    `};
    
    ${multiline && `
    height: 164px;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 0.3px;
    padding: 13px 14px;
    `};
    
    ${limit && `
    padding: 0;
    width: ${wid ? wid : '100%'};
    background-color: #ffffff;
    `};
    
    ${err && !icon && !limit && `border: 1px solid red;`};
    ${err && `color: red`};
    ${props.fullWid && `width: 100%;`};
    ${props.weight && `font-weight: ${weight}`};
    ${props.textCenter && `text-align: center`};
    `

  return { container, input }
}

export default inputStyles