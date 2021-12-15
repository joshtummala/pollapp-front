import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Route path="/privacy" exact component={PrivacyPolicy}/>
    </BrowserRouter>
  );
}

export default App;
