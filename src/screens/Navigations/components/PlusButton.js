import React from 'react'
import styled from 'styled-components';
import { Animated, } from 'react-native';
import { useDispatch } from "react-redux"
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';

import AdditionalMenuItem from "./AdditionalMenuItem"

import AddPostIcon from "assets/bottomNavigations/addPostIcon.png"
import AddRecipeIcon from "assets/bottomNavigations/addRecipeIcon.png"
import StartStreamingIcon from "assets/bottomNavigations/startStreamingIcon.png"
import FoodersMarketIcon from "assets/bottomNavigations/foodersMarketIcon.png"
import { setShowAddPost, setShowAddRecipe, setShowAddProduct } from "store/modals/ModalsActions";

const CircularView = styled.View`
background-color: rgba(105, 121, 248, 0.64);
width: ${wp(114)}px;
height: ${wp(114)}px;
border-top-left-radius: ${wp(114) / 2}px;
border-top-right-radius: ${wp(114) / 2}px;
position: relative;
`;

const PlusButton = ({ navigation, activeMenu, rotateData, moveData }) => {
  const dispatch = useDispatch()

  const handleOpenAddPostModal = () => {
    dispatch(setShowAddPost({ isVisible: true }))
  }

  const handleOpenAddRecipeModal = () => {
    dispatch(setShowAddRecipe({ isVisible: true }))
  }

  const handleOpenAddProductModal = () => {
    dispatch(setShowAddProduct({ isVisible: true }))
  }

  return (
    <Animated.View
      style={{
        position: 'relative',
        overflow: 'hidden',
        maxHeight: wp(58),
        maxWidth: wp(115),
        position: 'absolute',
        zIndex: 1,
        bottom: moveData,
        right: -wp(31),
        transform: [{ rotate: rotateData }],
      }}>
      <CircularView>
        <AdditionalMenuItem
          Icon={FoodersMarketIcon}
          text={`Fooders\nMarket`}
          bottom={`${wp(57)}px`}
          right={`${wp(7)}px`}
          navigation={navigation}
          activeMenu={activeMenu}
          onClickAction={handleOpenAddProductModal}
        />
        <AdditionalMenuItem
          Icon={StartStreamingIcon}
          text={`Live\nStreaming`}
          bottom={`${wp(69)}px`}
          right={`${wp(12)}px`}
          navigation={navigation}
          activeMenu={activeMenu}
          onClickAction={handleOpenAddPostModal}
        />
        <AdditionalMenuItem
          Icon={AddRecipeIcon}
          text={`Recipe`}
          bottom={`${wp(88)}px`}
          right={`${wp(22)}px`}
          navigation={navigation}
          activeMenu={activeMenu}
          onClickAction={handleOpenAddRecipeModal}
        />
        <AdditionalMenuItem
          Icon={AddPostIcon}
          text={`Casual`}
          bottom={`${wp(96)}px`}
          right={`${wp(38)}px`}
          navigation={navigation}
          activeMenu={activeMenu}
          onClickAction={handleOpenAddPostModal}
        />
      </CircularView>
    </Animated.View>
  );
};

export default PlusButton

