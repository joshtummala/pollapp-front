import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
