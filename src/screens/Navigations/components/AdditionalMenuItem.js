import React from 'react'
import styled from 'styled-components';
import { Image } from "react-native"
import { useDispatch } from "react-redux"
import { TouchableWithoutFeedback } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';

import { Col, MyText } from 'components';

const AdditionalStyledItem = styled(Col)`
    position: absolute;
    z-index: 12;
    bottom: ${(props) => props.bottom};
    right: ${(props) => props.right};
    transform: rotate(90deg);
    opacity: 0.8;
  `;

const AdditionalMenuItem = ({ navigation, bottom, right, text, Icon, activeMenu, onClickAction }) => {
  const dispatch = useDispatch()
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onClickAction();
        dispatch({
          type: 'CHANGE_MENU',
          payload: false,
        });
        setTimeout(() => {
          dispatch({
            type: 'BUTTON_PRESS',
            payload: false,
          });
        }, 400);
        navigation.navigate(activeMenu);
      }}>
      <AdditionalStyledItem bottom={bottom} right={right}>
        <Image source={Icon} style={{ width: wp(11.4), height: wp(11.4) }} />
        <MyText size={`${RFValue(12)}px`} color="#fff">
          {text}
        </MyText>
      </AdditionalStyledItem>
    </TouchableWithoutFeedback>
  );
};

export default AdditionalMenuItem

