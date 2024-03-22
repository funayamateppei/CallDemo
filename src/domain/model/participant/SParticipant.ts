import { Size } from "../Size";

export interface SParticipant {
  /** 識別子 */
  identity: string;

  /** 表示名 */
  name?: string;

  /** ポインタの色 */
  color?: string;

  /** 映像の表示状態 */
  videoViewState: string;

  /** オーディオの状態 */
  isAudioEnabled: boolean;

  /** 発話中かどうか */
  isTalking: boolean;

  /** 映像のサイズ */
  size?: Size;

  /** ネットワーク品質 */
  networkQuality: number;
}
