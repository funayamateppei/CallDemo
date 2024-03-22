import { useStore } from "zustand";
import { useRoomStore } from "./useRoomStore";

export const useLocalVideoTrack = () => {
  const context = useRoomStore();
  return useStore(context, (state) => state.localVideoTrack);
};

export const useLocalVideoTrackIsEnabled = () => {
  const context = useRoomStore();
  return useStore(context, (state) => state.localVideoTrack?.isEnabled);
};
