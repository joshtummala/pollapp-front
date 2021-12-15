import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Explore from "./components/Explore";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import store from "./reducers/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/privacy" exact component={PrivacyPolicy} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path={["/", "/home", "/explore"]} exact component={Explore} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
