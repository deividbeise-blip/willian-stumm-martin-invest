import posthog, { posthogEnabled } from "./posthog";

type LogAttributes = Record<string, string | number | boolean>;

export const posthogLogs = {
  info(message: string, attributes: LogAttributes) {
    if (posthogEnabled) {
      posthog.logger.info(message, attributes);
    }
  },
};
