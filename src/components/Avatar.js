import React, { useState, useEffect } from 'react'
import { Image, } from 'react-native'

import { Icon } from "components"

const baseUrl = "https://food-book.co/api/";

function Avatar({ uri, size, showCircle }) {

  const [userImageHasHttp, setUserImageHasHttp] = useState(false);

  useEffect(() => {
    if (uri && uri !== "undefined") {
      const prefix = uri.toString().split("/")[0];
      if (prefix === "images") {
        setUserImageHasHttp(false);
      } else {
        setUserImageHasHttp(true);
      }
    }
  }, [uri]);

  if (!uri) {
    if (showCircle) {
      return (
        <Image
          source={require('assets/icons/user-placeholder.png')}
          style={{
            width: size,
            height: size,
            marginTop: 1,
            borderRadius: 70,
            alignSelf: 'center',
            borderColor: '#6979f8',
            borderWidth: size < 30 ? 1 : 2,
          }}
        />
      )
    } else {
      return <Icon type='user-placeholder' size={size} rounded />
    }
  }

  if (showCircle) {
    return (
      <Image
        source={{ uri: userImageHasHttp ? uri : baseUrl + uri }}
        style={{
          width: size,
          height: size,
          marginTop: 1,
          borderRadius: 70,
          alignSelf: 'center',
          borderColor: '#6979f8',
          borderWidth: size < 30 ? 1 : 2,
        }}
      />
    )
  } else {
    return (
      <Image
        source={{ uri: userImageHasHttp ? uri : baseUrl + uri }}
        style={{
          width: size,
          height: size,
          marginTop: 1,
          borderRadius: 70,
          alignSelf: 'center',
          borderColor: 'white'
        }}
      />
    )
  }

}

export default Avatar
