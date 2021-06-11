import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={25.476} height={25.476} viewBox="0 0 25.476 25.476" {...props}>
      <G
        data-name="Group 127"
        transform="translate(.5 .5)"
        fill="none"
        stroke={props.fill ? props.fill : '#7a8fa6'}
        strokeLinejoin="round">
        <Path
          data-name="Path 220"
          d="M8.763 3.175l-.274 5.066c0 1.075.551 1.072 1.242 1.818a2.6 2.6 0 01.608 1.8l-.759 8.908a1.366 1.366 0 001.115 1.487 1.18 1.18 0 00.167 0 1.367 1.367 0 001.115-1.487l-.759-8.908a2.6 2.6 0 01.608-1.8c.691-.746 1.242-.743 1.242-1.818V3.175s2.639 1.462 2.918 9.5a.991.991 0 01-.32.77l-.674.6a.975.975 0 00-.315.8l.439 5.922a1.366 1.366 0 01-1.115 1.487 1.18 1.18 0 01-.167 0 1.367 1.367 0 01-1.115-1.487l1.133-8.923"
          strokeWidth={0.75}
        />
        <Path
          data-name="Line 14"
          transform="translate(9.96 3.175)"
          strokeWidth={0.75}
          d="M0 0L0 4.123"
        />
        <Path
          data-name="Line 15"
          transform="translate(11.339 3.175)"
          strokeWidth={0.75}
          d="M0 0L0 4.123"
        />
        <Circle
          data-name="Ellipse 12"
          cx={12.238}
          cy={12.238}
          r={12.238}
          strokeWidth={1}
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
