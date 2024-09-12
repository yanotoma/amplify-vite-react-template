import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
// import outputs from "../amplify_outputs.json";
console.log({
  userPoolId: import.meta.env.VITE_AWS_COGNITO_USER_POOL_ID,
  userPoolClientId: import.meta.env.VITE_AWS_COGNITO_CLIENT_ID,
  identityPoolId: import.meta.env.VITE_AWS_COGNITO_IDENTITY_POOL_ID,
});

Amplify.configure({
  // ...outputs,
  Auth: {
    Cognito: {
      userPoolId: import.meta.env.VITE_AWS_COGNITO_USER_POOL_ID,
      userPoolClientId: import.meta.env.VITE_AWS_COGNITO_CLIENT_ID,
      identityPoolId: import.meta.env.VITE_AWS_COGNITO_IDENTITY_POOL_ID,
      loginWith: {
        email: true,
      },
      signUpVerificationMethod: "code",
      userAttributes: {
        email: {
          required: true,
        },
      },
      allowGuestAccess: false,
      passwordFormat: {
        minLength: 6,
        requireLowercase: false,
        requireUppercase: false,
        requireNumbers: false,
        requireSpecialCharacters: false,
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
