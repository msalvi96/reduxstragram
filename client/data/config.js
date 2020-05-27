import Raven from 'raven-js';
// https://ffe8231ea8d64a7082e9d2538ecb5746@o398671.ingest.sentry.io/5254689
const sentry_key = 'ffe8231ea8d64a7082e9d2538ecb5746';
const sentry_app = '5254689';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
