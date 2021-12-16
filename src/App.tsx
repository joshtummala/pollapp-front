import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Explore from "./components/Explore";
import QuestionsUser from "./components/Questions/questionsUser";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import store from "./reducers/store";
import Search from "./components/search";
import EditProfile from "./components/EditProfile";
import Admin from "./components/Admin";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/privacy" exact component={PrivacyPolicy} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path={["/", "/home", "/explore"]} exact component={Explore} />
        <Route path={["/questions"]} exact component={QuestionsUser} />
        <Route path={["/search"]} exact component={Search} />
        <Route path={["/editprofile"]} exact component={EditProfile} />
        <Route path={["/admin"]} exact component={Admin} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
