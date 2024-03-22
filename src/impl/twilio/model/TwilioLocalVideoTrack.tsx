import { LocalVideoTrack } from "twilio-video";
import { SLocalVideoTrack } from "../../../domain/model";

export class TwilioLocalVideoTrack implements SLocalVideoTrack {
  constructor(private localVideoTrack: LocalVideoTrack) {}

  get isEnabled(): boolean {
    return this.localVideoTrack.isEnabled;
  }

  toggle() {
    this.localVideoTrack = this.localVideoTrack.enable(
      !this.localVideoTrack.isEnabled
    );
  }

  attach(element: HTMLVideoElement) {
    this.localVideoTrack.attach(element);
  }

  detach(element: HTMLVideoElement) {
    this.localVideoTrack.detach(element);
  }
}
