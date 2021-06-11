import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={25.897} height={25.04} viewBox="0 0 25.897 25.04" {...props}>
      <G
        data-name="Group 128"
        fill="none"
        stroke={props.fill ? props.fill : '#7a8fa6'}
        strokeLinejoin="round"
        strokeWidth={1}>
        <Path
          data-name="Path 191"
          d="M9.62 10.827c2.23 0 3.331-2.857 3.8-4.657a6.618 6.618 0 00.125-3.125l-.028-.119c-.952-3.9-6.849-3.9-7.8 0l-.028.119a6.617 6.617 0 00.125 3.125c.475 1.8 1.576 4.657 3.806 4.657z"
          transform="translate(.5 .5)"
        />
        <Path
          data-name="Path 192"
          d="M17.999 14.164a7.57 7.57 0 00-4.838-2 .529.529 0 00-.5.271l-2.9 5.149a.167.167 0 01-.29 0l-2.9-5.149a.53.53 0 00-.5-.271c-1.318.09-6.078.739-6.078 5.426v4.287a1.158 1.158 0 001.158 1.158h9.744"
          transform="translate(.5 .5)"
        />
        <G
          data-name="Group 99"
          transform="translate(.5 .5) translate(12.371 14.779)">
          <Path
            data-name="Path 193"
            d="M7.303 4.851h2.907v1.255a3.155 3.155 0 01-3.155 3.155h-3.9A3.155 3.155 0 010 6.106V4.852h6.1"
          />
          <Path
            data-name="Path 194"
            d="M9.789 4.852a2.43 2.43 0 01-2.073-1.239 3.1 3.1 0 00-5.223 0A2.43 2.43 0 01.42 4.852"
          />
          <Path
            data-name="Line 9"
            transform="translate(8.645 1.284)"
            d="M0 3.03L4.083 0"
          />
          <Path
            data-name="Line 10"
            transform="translate(7.816)"
            d="M0 3.485L3.155 0"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
