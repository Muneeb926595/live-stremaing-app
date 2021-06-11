import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';

import Box from "./Box"
import Icon from "./Icon"

const CreateStreamCard = () => {
  return (
    <Box
      wid={`${wp(40)}px`}
      ht={`${wp(40)}px`}
      border="1px solid #dbdbdb"
      hasRadius="10px"
      hasShadow="0px 0px 10px #6d6d1d"
      marg="10px"
      centerAll
    >
      <Icon type="add-stream" size={40} />
    </Box>
  );
};

export default CreateStreamCard;