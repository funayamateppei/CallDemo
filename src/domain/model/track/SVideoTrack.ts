export interface SVideoTrack {
  /**
   * {@link element}に映像をレンダリングする
   *
   * @param element 映像をレンダリングしたいビデオエレメント
   * @returns
   */
  attach: (element: HTMLVideoElement) => void;

  /**
   * {@link element}へのレンダリングを終了する
   *
   * @param element レンダリングを終了したいビデオエレメント
   * @returns
   */
  detach: (element: HTMLVideoElement) => void;
}
