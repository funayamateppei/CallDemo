import { useLocalVideoViewModel } from "./LocalVideo.model";
import { component } from "./Video.component";

export function LocalVideo() {
  const viewModel = useLocalVideoViewModel();

  return <component.Video {...viewModel} />;
}
