import { SVideoTrack } from ".";

export interface SLocalVideoTrack extends SVideoTrack {
  /**
   * ビデオトラックが有効かどうか
   */
  isEnabled: boolean;

  /**
   * ビデオトラックの状態（{@link isEnabled}）を反転する
   *
   * @returns
   */
  toggle: () => void;
}
