import { useRef, useEffect } from "react";
import { SVideoTrack } from "../../../model";

export type Props = {
  track?: SVideoTrack;
};

export const component = {
  Video({ track }: Props) {
    const video = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      const { current } = video;

      if (current) {
        track?.attach(current);
      }

      return () => {
        if (current) {
          track?.detach(current);
        }
      };
    }, [track]);

    return <video ref={video} />;
  },
};
