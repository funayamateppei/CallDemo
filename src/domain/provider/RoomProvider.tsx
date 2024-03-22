import { PropsWithChildren, createContext } from "react";
import { SRoom } from "../model/SRoom";
import { StoreApi } from "zustand";

export type RoomStore = StoreApi<SRoom>;

export const Context = createContext<RoomStore>(undefined!);

export function RoomProvider({ children, store }: PropsWithChildren<{ store: RoomStore }>) {
    return <Context.Provider value={store}>{children}</Context.Provider>;
}
