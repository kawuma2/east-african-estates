import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { LandProvider } from "./context";
import { BlogProvider } from "./blogcontext";
import { HouseProvider } from "./housecontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LandProvider>
    <BlogProvider>
      <HouseProvider>
        <Router>
          <App />
        </Router>
      </HouseProvider>
    </BlogProvider>
  </LandProvider>
);
