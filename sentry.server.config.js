import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://fe8bc566bfe94e80b425911077dbfb18@o861592.ingest.sentry.io/6265029",
  tracesSampleRate: 1.0
});

