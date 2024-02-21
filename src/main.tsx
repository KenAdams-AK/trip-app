import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App";
import { ModalProvider } from "./context/modalContext";

import "./scss/styles.scss";

const clientId = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <GoogleOAuthProvider clientId={clientId}>
          <App />
        </GoogleOAuthProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
