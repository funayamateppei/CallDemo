import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TwilioRoomProvider } from "./impl/twilio/provider/TwilioRoomProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <TwilioRoomProvider>
            <App />
        </TwilioRoomProvider>
    </React.StrictMode>
);
