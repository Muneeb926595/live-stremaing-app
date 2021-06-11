import React from "react";
import { View, Image } from "react-native";
import loading from "assets/gifs/loading.gif";
function Loader() {
  return (
    <View
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
      }}
    >
      <Image
        source={loading}
        style={{
          alignSelf: "center",
          width: 50,
          height: 50,
        }}
      />
    </View>
  );
}
export default Loader;