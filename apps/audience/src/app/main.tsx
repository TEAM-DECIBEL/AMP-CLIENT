import App from "@app/App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@amp/ads-ui/styles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
