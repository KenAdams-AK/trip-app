import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { AuthProvider } from "@/context/authContext";
import { ModalProvider } from "@/context/modalContext";

import App from "./App";

import "./scss/styles.scss";

const clientId = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID;
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ModalProvider>
            <GoogleOAuthProvider clientId={clientId}>
              <App />
            </GoogleOAuthProvider>
          </ModalProvider>
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
