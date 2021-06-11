import React, { useEffect, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { RTCView } from 'react-native-webrtc'
import StreamingContext from "../../ContextApi/StreamingContext"
import { StorageHelper } from '../../helpers';

const index = () => {
  const { stream, openCamera, connectSocket, startStreaming, } = useContext(StreamingContext);

  useEffect(() => {
    openCamera()
  }, [stream])
  useEffect(async () => {
    const localUserId = await StorageHelper.getItem(StorageHelper.StorageKeys.USER_ID)
    startStreaming(localUserId)
  }, [StorageHelper])

  useEffect(() => {
    // connectSocket()
  }, [])

  return (
    <>
      {stream && (
        <RTCView
          streamURL={stream}
          style={{
            flex: 1,
            height: '100%',
            width: '100%'
          }}
          objectFit='cover'
          mirror={true}
        />
      )}
    </>
  )
}

export default index

const styles = StyleSheet.create({})
