import { FC, ReactNode } from "react";
import { FeatureFlags } from "shared/types/featureFlags";
import { getFeatureFlags } from "../setGetFeatures";

interface ToggleFeaturesProps {
  feature: keyof FeatureFlags;
  on: ReactNode;
  off: ReactNode;
}

export const ToggleFeatures: FC<ToggleFeaturesProps> = (props) => {
  const { feature, on, off } = props;

  if (getFeatureFlags(feature)) {
    return on;
  }

  return off;
};
