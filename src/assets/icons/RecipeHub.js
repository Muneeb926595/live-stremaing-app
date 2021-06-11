import * as React from 'react';
import Svg, {G, Path, Circle} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={21.477} height={24.74} viewBox="0 0 21.477 24.74" {...props}>
      <G
        data-name="Group 113"
        transform="translate(.35 .35)"
        fill="none"
        stroke={props.fill ? props.fill : '#7a8fa6'}
        strokeLinejoin="round"
        strokeWidth={0.7}>
        <Path
          data-name="Path 199"
          d="M16.576 15.017V.39a.39.39 0 00-.39-.39H.386a.39.39 0 00-.39.39v21.875"
        />
        <Path
          data-name="Path 200"
          d="M17.143 24.04H1.774a1.774 1.774 0 01-1.77-1.775h0a1.774 1.774 0 011.774-1.774h10.934"
        />
        <G data-name="Group 102" transform="translate(1.804 2.89)">
          <Path
            data-name="Line 11"
            transform="translate(0 5.827)"
            d="M0 0L12.968 0"
          />
          <Path
            data-name="Path 201"
            d="M.966 5.827A5.559 5.559 0 016.484.975a5.56 5.56 0 015.518 4.852"
          />
          <Path
            data-name="Path 202"
            d="M2.41 5.077a4.014 4.014 0 011.949-2.322"
          />
          <Circle
            data-name="Ellipse 10"
            cx={0.488}
            cy={0.488}
            r={0.488}
            transform="translate(6.123)"
          />
        </G>
        <Path
          data-name="Line 12"
          transform="translate(1.804 12.727)"
          d="M0 0L12.968 0"
        />
        <G data-name="Group 103" transform="translate(11.337 14.407)">
          <Circle data-name="Ellipse 11" cx={3.325} cy={3.325} r={3.325} />
          <Path data-name="Path 203" d="M1.947 4.703a1.949 1.949 0 010-2.756" />
        </G>
        <Path
          data-name="Line 13"
          transform="translate(17.013 20.084)"
          d="M0 0L3.892 3.196"
        />
        <Path data-name="Path 204" d="M5.213 20.491v2.064l-1-.9-1 .9v-2.064" />
      </G>
    </Svg>
  );
}

export default SvgComponent;
