import React, { useEffect } from 'react'
import styled from 'styled-components';
import { Animated } from "react-native"
import { useDispatch } from "react-redux"
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';

import { MyText, } from 'components';

const StyledRow = styled.TouchableOpacity`
display: flex;
flex-direction: row;
align-items: center;
border-radius: 20px;
width: ${(props) =>
    props.focused && !props.minimizeOptions ? `${wp(25.4)}px` : `${wp(6)}px`};
min-height: ${wp(10)}px;
${(props) =>
    props.minimizeOptions
      ? 'margin-left: 10px'
      : props.focused
        ? 'margin-left:10px'
        : 'margin-left: 14px'};
${(props) =>
    props.minimizeOptions
      ? 'margin-right: 10px'
      : props.focused
        ? 'margin-right:0'
        : 'margin-right: 14px'};
background-color: ${(props) =>
    props.focused && !props.minimizeOptions ? '#6979F8' : 'transparent'};
margin-top: ${wp(2.2)}px;
padding: ${wp(2)}px;
`;

const TabBarItem = (props) => {
  const tabAnimation = new Animated.Value(0)
  const dispatch = useDispatch();
  const { text, Icon, number, navigation, navigateTo, minimizeOptions, setActiveMenu, activeMenu } = props;
  const focused = activeMenu === navigateTo;

  useEffect(() => {
    if (focused) {
      Animated.timing(
        tabAnimation,
        {
          toValue: 1,
          duration: 300,
          useNativeDriver: false
        }
      ).start();
    } else {
      Animated.timing(
        tabAnimation,
        {
          toValue: 1,
          duration: 0,
          useNativeDriver: false
        }
      ).start();
    }
  }, [tabAnimation])


  return (
    <Animated.View
      style={{
        opacity: tabAnimation,
      }}
    >
      <StyledRow
        center
        focused={focused}
        minimizeOptions={minimizeOptions}
        bg={focused && !minimizeOptions ? '#6979F8' : 'transparent'}
        pad={`${wp(2)}px`}
        onPress={() => {
          dispatch({
            type: 'CHANGE_MENU',
            payload: false,
          });

          if (minimizeOptions) {
            setTimeout(() => {
              dispatch({
                type: 'BUTTON_PRESS',
                payload: false,
              });
              setActiveMenu(navigateTo);
            }, 400);
          } else {
            setActiveMenu(navigateTo);
          }
          navigation.navigate(navigateTo);
        }}>
        <React.Fragment>
          <Icon fill={focused && !minimizeOptions ? '#fff' : '#7a8fa6'} />
          {focused && !minimizeOptions && (
            <MyText size={`${RFValue(10)}px`} marg="0 0 0 4px" color="#fff">
              {text}
            </MyText>
          )}
        </React.Fragment>
      </StyledRow >
    </Animated.View>
  );
};

export default TabBarItem
