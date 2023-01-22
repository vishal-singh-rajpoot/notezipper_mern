import "./App.css";
import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";

const App = () => {
  const [search, setSearch] = useState("");
  // console.log(search);
  
  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/createnote" component={CreateNote} />
        <Route exact path="/note/:id" component={SingleNote} />
        <Route path="/mynotes" component={() => <MyNotes search={search} />} />
        {/* <LandingPage /> */}
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
