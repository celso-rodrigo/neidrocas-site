import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderNavbar from "./components/HeaderNavbar";
import MainFooter from "./components/MainFooter";
import Contest from "./pages/Contest";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import "./styles/global.css";

function App() {
  return (
    <>
      <HeaderNavbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route exact path="/" element={<MainPage />} />
        <Route
          exact
          path="/contest/first"
          element={<Contest contest="firstContest" />}
        />
        <Route
          exact
          path="/contest/second"
          element={<Contest contest="secondContest" />}
        />
        <Route
          exact
          path="/contest/third"
          element={<Contest contest="thirdContest" />}
        />
        <Route
          exact
          path="/contest/fourth"
          element={<Contest contest="fourthContest" />}
        />
      </Routes>
      <MainFooter />
    </>
  );
}

export default App;
