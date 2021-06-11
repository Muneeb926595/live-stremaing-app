import React from 'react';
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

class ContextProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stream: null,
    }
  }

  peerConnections = {}

  componentDidMount() {
    console.log('connectSocket')
    this.connectSocket()
  }

  connectSocket = async () => {
    console.log("now the sockets are ready")
    socket.on("candidate", (id, candidate) => {
      console.log('candidate', data.candidate)
      this.peerConnections[id]
        .addIceCandidate(candidate)
        .catch((e) => console.error(e));
    });

    socket.on("watcher", async (broadcasterId, watcherId) => {
      console.log("new watcher recieved with broadcasterId, watcherId", broadcasterId, watcherId)
      const peerConnection = new RTCPeerConnection(config);

      this.peerConnections[watcherId] = peerConnection
      // setPeerConnections((peerConnections[watcherId] = peerConnection));

      console.log("here is host stream", this.state.stream)
      peerConnection.addStream(this.state.stream)
      // this.state.stream.getVideoTracks().forEach((track) => {
      //   console.log("yes", peerConnection)
      //   console.log("track", track)
      //   peerConnection.addTrack(track, this.state.stream)
      // })

      peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
          socket.emit("candidate", broadcasterId, watcherId, event.candidate)
        }
      }

      peerConnection
        .createOffer()
        .then((sdp) => peerConnection.setLocalDescription(sdp))
        .then(() => {
          console.log("now creating the offer and sending it to the guest")
          console.log('peerConnection.localDescription', peerConnection.localDescription)
          socket.emit(
            "offer",
            broadcasterId,
            watcherId,
            peerConnection.localDescription
          );
        });


      socket.emit("new-watcher-joined", {
        broadcasterId: broadcasterId,
        watchersCount: Object.keys(this.peerConnections).length,
      });
    });

    socket.on("answer", (id, description) => {
      console.log('this.peerConnections', this.peerConnections)
      console.log('iddddddddddddddddddddddddddddddddddd', id)
      console.log('description', description)
      this.peerConnections[id].setRemoteDescription(description);
    });
  }

  switchCamera = () => {
    this.state.stream
      .getVideoTracks()
      .forEach((track) => {
        track._switchCamera()
      })
  }

  openCamera = async () => {
    if (this.state.stream) return
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
        this.setState({ stream })
      })
      .catch(error => {
        // Log error
      })
  }

  startStreaming = (tripId) => {
    console.log("sending this id to backend ", tripId)
    socket.emit("broadcaster", { broadcasterId: tripId });
  }


  render() {
    return (
      <StreamingContext.Provider value={{
        openCamera: this.openCamera,
        switchCamera: this.switchCamera,
        startStreaming: this.startStreaming,
        connectSocket: this.connectSocket,
        stream: this.state.stream?.toURL()
      }}
      >
        {this.props.children}
      </StreamingContext.Provider>
    )
  }
};


export default ContextProvider