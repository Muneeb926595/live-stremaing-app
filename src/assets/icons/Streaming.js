import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={20.171} height={25.018} viewBox="0 0 20.171 25.018" {...props}>
      <G
        data-name="Group 129"
        fill="none"
        stroke="#7a8fa6"
        strokeLinejoin="round"
        strokeWidth={1}>
        <Path
          data-name="Path 196"
          d="M18.936 14.994a10.184 10.184 0 00-.5-5.307 3.979 3.979 0 01-3.04 2.538C16.246 4.581 9.033 0 9.033 0c1.552 3.819.567 10.183-2.757 10.254-3.258.071-.738-6.458-.643-6.712-5.7 3.235-5.785 9.126-5.572 11.452 0 0 1.033 9.377 11.166 9.013"
          transform="translate(.517 .5)"
        />
        <Path
          data-name="Path 197"
          d="M13.6 16.862l-6.137-3.543v7.087z"
          transform="translate(.517 .5)"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
