/**
 * Lightweight, privacy-first no-op analytics module.
 * No external tracking scripts are loaded.
 * All event hooks check for explicit opt-in environment variables before emitting.
 */

type EventParams = Record<string, string | number | boolean | undefined>;

export const analytics = {
  pageView: (url: string) => {
    if (process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true") {
      // In production opt-in environments, custom telemetry could be routed here.
      if (process.env.NODE_ENV !== "production") {
        console.log(`[Analytics:PageView] ${url}`);
      }
    }
  },

  trackEvent: (eventName: string, params?: EventParams) => {
    if (process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true") {
      if (process.env.NODE_ENV !== "production") {
        console.log(`[Analytics:Event] ${eventName}`, params);
      }
    }
  },
};
