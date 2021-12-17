import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Explore from "./components/Explore";
import QuestionsUser from "./components/Questions/questionsUser";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import createStore from "./reducers/store";
import Search from "./components/search";
import EditProfile from "./components/EditProfile";
import Admin from "./components/Admin";
import GroupDetails from "./components/Group/groupDetails";
import QuestionDetails from "./components/Questions/questionDetails";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = createStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Route path="/privacy" exact component={PrivacyPolicy} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path={["/", "/home", "/explore"]} exact component={Explore} />
          <Route path={["/questions"]} exact component={QuestionsUser} />
          <Route path={["/search"]} exact component={Search} />
          <Route path={["/editprofile"]} exact component={EditProfile} />
          <Route path={["/admin"]} exact component={Admin} />
          <Route path={["/group/:id"]} exact component={GroupDetails} />
          <Route path={["/question/:id"]} exact component={QuestionDetails} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
