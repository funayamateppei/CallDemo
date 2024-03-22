import { Size } from "../Size";
import { SParticipant } from "./SParticipant";

export abstract class SLocalParticipant implements SParticipant {
  abstract videoViewState: string;
  abstract isAudioEnabled: boolean;
  abstract isTalking: boolean;
  abstract size?: Size | undefined;
  abstract networkQuality: number;
  abstract name?: string | undefined;

  color?: string | undefined;

  constructor(public readonly identity: string) {
    // this.color = calcColor(identity)
  }
}
