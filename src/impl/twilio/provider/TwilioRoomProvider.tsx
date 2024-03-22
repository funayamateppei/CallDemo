import { createStore } from "zustand";
import { TwilioServiceFactory } from "../../service/TwilioServiceFactory";
import { RoomProvider, RoomStore } from "../../../domain/provider/RoomProvider";
import { PropsWithChildren } from "react";

const createTwilioRoomStore = (): RoomStore =>
    createStore((set) => {
        initializeLocalVideoTrack(set);

        return {};
    });

async function initializeLocalVideoTrack(set: RoomStore["setState"]) {
    const localVideoTrack = await TwilioServiceFactory.createLocalVideoTrack();
    set(() => ({ localVideoTrack }));
}

export function TwilioRoomProvider({ children }: PropsWithChildren) {
    return <RoomProvider store={createTwilioRoomStore()}>{children}</RoomProvider>;
}
