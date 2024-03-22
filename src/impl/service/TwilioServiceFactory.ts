import { createLocalVideoTrack } from "twilio-video";
import { TwilioLocalVideoTrack } from "../twilio/model/TwilioLocalVideoTrack";

export const TwilioServiceFactory = {
  async createLocalVideoTrack(): Promise<TwilioLocalVideoTrack> {
    const track = await createLocalVideoTrack();
    return new TwilioLocalVideoTrack(track);
  },
};
