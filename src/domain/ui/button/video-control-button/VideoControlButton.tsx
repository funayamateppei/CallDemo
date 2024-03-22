import { component } from "./VideoControlButton.component";
import { useVideoControlButtonViewModel } from "./VideoControlButton.model";

export function VideoControlButton() {
  const viewModel = useVideoControlButtonViewModel();
  return <component.VideoControlButton {...viewModel} />;
}
