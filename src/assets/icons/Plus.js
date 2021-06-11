import * as React from 'react';
import Svg, {Defs, G, Circle, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg width={53} height={53} viewBox="0 0 65 65" {...props}>
      <Defs></Defs>
      <G data-name="Group 118" transform="translate(-457 -4504)">
        <G transform="translate(457 4504)" filter="url(#a)">
          <Circle
            data-name="Ellipse 16"
            cx={23.5}
            cy={23.5}
            r={23.5}
            transform="translate(9 13)"
            fill="#6979f8"
          />
        </G>
        <Path
          data-name="Line 20"
          transform="translate(489.5 4530.5)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={3}
          d="M0 0L0 19.5"
        />
        <Path
          data-name="Line 21"
          transform="matrix(0 1 -1 0 499 4540.25)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={3}
          d="M0 0L0 19.5"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
