import { useEffect, useRef } from "react";
import { useLocalVideoTrack } from "../../../provider/hooks/useLocalVideoTrack";

export function Video() {
  const localVideoTrack = useLocalVideoTrack();
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const { current } = video;

    if (current) {
      localVideoTrack?.attach(current);
    }

    return () => {
      if (current) {
        localVideoTrack?.detach(current);
      }
    };
  }, [localVideoTrack]);

  return <video ref={video} />;
}
