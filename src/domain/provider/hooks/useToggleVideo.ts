import { useCallback } from "react";
import { useRoomStore } from "./useRoomStore";

export const useToggleVideo = () => {
  const { setState } = useRoomStore();

  return useCallback(() => {
    setState(({ localVideoTrack }) => {
      localVideoTrack?.toggle();
      return { localVideoTrack };
    });
  }, [setState]);
};
