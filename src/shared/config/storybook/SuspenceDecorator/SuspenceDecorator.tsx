import { StoryFn } from "@storybook/react";
import { Suspense } from "react";
import { Loader } from "shared/ui/deprecated/Loader";

export const SuspenceDecorator = (Story: StoryFn) => {
  return (
    <Suspense fallback={<Loader />}>
      <Story />
    </Suspense>
  );
};
