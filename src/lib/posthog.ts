import posthog from "posthog-js";

const posthogKey = import.meta.env.VITE_POSTHOG_KEY;
const posthogHost = import.meta.env.VITE_POSTHOG_HOST;

export const posthogEnabled = Boolean(posthogKey && posthogHost);

if (posthogKey && posthogHost) {
  posthog.init(posthogKey, {
    api_host: posthogHost,
    defaults: "2026-08-30",
    logs: {
      serviceName: "willian-stumm-martin-invest-web",
      environment: import.meta.env.MODE,
    },
    capture_exceptions: {
      capture_unhandled_errors: true,
      capture_unhandled_rejections: true,
      capture_console_errors: false,
    },
  });
} else if (import.meta.env.DEV) {
  const missingVariable = posthogKey
    ? "VITE_POSTHOG_HOST"
    : "VITE_POSTHOG_KEY";

  throw new Error(
    `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`,
  );
}

type EventProperties = Record<string, string | number | boolean>;

export function captureEvent(event: string, properties: EventProperties) {
  if (posthogEnabled) {
    posthog.capture(event, properties);
  }
}

export default posthog;
