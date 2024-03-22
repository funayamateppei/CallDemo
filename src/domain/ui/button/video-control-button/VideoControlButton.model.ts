import { useLocalVideoTrackIsEnabled } from "../../../provider/hooks/useLocalVideoTrack";
import { useToggleVideo } from "../../../provider/hooks/useToggleVideo";

export const useVideoControlButtonViewModel = () => {
  const isEnabled = useLocalVideoTrackIsEnabled();
  const toggle = useToggleVideo();

  return { isEnabled, toggle };
};
