import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from "./MyNotes/MyNotes";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route exact path="/" component={LandingPage} />
      <Route path="/mynotes" component={() => <MyNotes />} />
      {/* <LandingPage /> */}
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
