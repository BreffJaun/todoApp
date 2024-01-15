// I M P O R T:   F I L E S

// I M P O R T:   P A C K A G E S
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// I M P O R T:   F U N C T I O N S
import App from "./App.jsx";

// C O D E

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
