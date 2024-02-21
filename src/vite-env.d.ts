/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORECAST_API_KEY: string;
  readonly VITE_GOOGLE_OAUTH_CLIENT_ID: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
