import { useLocalVideoTrack } from "../../../provider/hooks/useLocalVideoTrack";
import { Props } from "./Video.component";

export const useLocalVideoViewModel = (): Props => ({
  track: useLocalVideoTrack(),
});
