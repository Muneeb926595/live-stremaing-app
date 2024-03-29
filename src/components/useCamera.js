import { useState, useEffect } from "react";
import { mediaDevices } from 'react-native-webrtc'

const useUserMedia = (requestedMedia) => {
  const [mediaStream, setMediaStream] = useState(null);

  useEffect(() => {
    const enableStream = async () => {
      try {
        const stream = await mediaDevices
          .getUserMedia(requestedMedia)

        setMediaStream(stream);
      } catch (err) {
        console.log(err);
      }
    };

    if (!mediaStream) {
      enableStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
      };
    }
  }, [mediaStream, requestedMedia]);

  return mediaStream;
};

export default useUserMedia;

