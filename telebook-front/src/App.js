import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import './styles/global.css'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
