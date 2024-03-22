type Props = {
  isEnabled?: boolean;
  toggle: () => void;
};

export const component = {
  VideoControlButton({ isEnabled, toggle }: Props) {
    if (isEnabled === undefined) return <div>ビデオを取得できていません</div>;

    return <button onClick={toggle}>ビデオ: {isEnabled ? "on" : "off"}</button>;
  },
};
