import { useContext } from "react";
import { Context } from "../RoomProvider";

export const useRoomStore = () => {
  return useContext(Context);
};
