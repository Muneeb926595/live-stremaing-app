import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';

import Clickable from "../../components/Clickable"
import Col from "../../components/Col"
import CreateStreamCard from "../../components/CreateStreamCard";

const LiveStreams = ({ navigation }) => {
  return (
    <Col bg="#080707" wid={`100%`} centerAll >
      <Clickable onClick={() => navigation.navigate("HostStreaming")}>
        <CreateStreamCard />
      </Clickable>
    </Col>
  );
};

export default LiveStreams;