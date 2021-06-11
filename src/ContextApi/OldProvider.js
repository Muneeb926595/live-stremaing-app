import React, { useState, } from 'react';
import {
  RTCPeerConnection,
  mediaDevices
} from 'react-native-webrtc'

import StreamingContext from './StreamingContext'
import { socket } from "../helpers/sockets"

const config = {
  transportPolicy: "relay",
  iceServers: [
    { urls: ["stun:ss-turn2.xirsys.com"] },
    {
      username:
        "xR1Sb3-GrIK067wvB2mDWEw8MTcsOa_-1SXpds8mpz2YkCQB_zLUyGefnqWJ74b-AAAAAGB_3pBNdW5lZWJOZXNsaXQ=",
      credential: "65c4f662-a279-11eb-89a9-0242ac140004",
      urls: [
        "turn:ss-turn2.xirsys.com:80?transport=udp",
        "turn:ss-turn2.xirsys.com:3478?transport=udp",
        "turn:ss-turn2.xirsys.com:80?transport=tcp",
        "turn:ss-turn2.xirsys.com:3478?transport=tcp",
        "turns:ss-turn2.xirsys.com:443?transport=tcp",
        "turns:ss-turn2.xirsys.com:5349?transport=tcp",
      ],
    },
  ],
  // iceTransportPolicy: "relay", // uncomment this line if you want the user to just connect with TURN server
};
let myLocalStream
const ContextProvider = ({ children }) => {
  const [stream, setStream] = useState()
  const [peerConnections, setPeerConnections] = useState({})

  const switchCamera = () => {
    // stream
    //   .getVideoTracks()
    //   .forEach((track) => {
    //     track._switchCamera()
    //   })
  }
  const openCamera = async () => {
    if (stream) return stream
    mediaDevices
      .getUserMedia({
        audio: true,
        video: {
          mandatory: {
            minFrameRate: 30,
            minHeight: 768,
            minWidth: 1280
          },
          facingMode: 'user'
        }
      })
      .then(stream => {
        myLocalStream = stream
        setStream(stream)
      })
      .catch(error => {
        // Log error
      })
  }
  const startStreaming = (tripId) => {
    console.log("sending this id to backend ", tripId)
    socket.emit("broadcaster", { broadcasterId: tripId });
  }

  const newWatcherJoined = () => {
    socket.on("watcher", (broadcasterId, watcherId) => {
      const peerConnection = new RTCPeerConnection(config);
      // peerConnections[watcherId] = peerConnection;
      // console.log("host peerconnections are", peerConnections)
      // setPeerConnections((peerConnections[watcherId] = peerConnection));

      console.log("here is your stream", myLocalStream)

      // stream.getVideoTracks().forEach((track) => {
      //   peerConnection.addTrack(track, stream)
      // })

      peerConnection.addStream(myLocalStream)


      console.log("just befor sendind the offer to the user")

      peerConnection.createOffer({ iceRestart: true })
        .then(sdp => peerConnection.setLocalDescription(sdp))
        .then(() => {
          console.log("offer is created")
          socket.emit(
            "offer",
            broadcasterId,
            watcherId,
            peerConnection.localDescription
          );
        })
        .catch(e => console.log('err create offer', e))

      peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
          socket.emit("candidate", broadcasterId, watcherId, event.candidate);
        }
      };

      socket.emit("new-watcher-joined", {
        broadcasterId: broadcasterId,
        watchersCount: Object.keys(peerConnections).length,
      });
    });
  }

  const recievedAnswer = () => {
    socket.on("answer", (id, description) => {
      peerConnections[id].setRemoteDescription(description);
    });
  }


  return (
    <StreamingContext.Provider value={{
      openCamera,
      switchCamera,
      recievedAnswer,
      startStreaming,
      newWatcherJoined,
      stream: stream?.toURL()
    }}
    >
      {children}
    </StreamingContext.Provider>
  );
};
export default ContextProvider