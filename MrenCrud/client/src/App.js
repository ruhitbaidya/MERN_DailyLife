import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import WrapingBorder from "./components/WrapingBorder"
import './App.css';
import LoginPage from "./components/LoginPage";
import WellComePage from "./components/WellComePage";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import WellProtectpage from "./components/wellProtectpage";
import userContext from "./userContextR/userContexts";
function App() {
  const [GloData, setGloData] = useState("")
  return (
    <>
      <userContext.Provider value={{GloData, setGloData}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WrapingBorder />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/wellcome" element={<WellProtectpage>
              <WellComePage />
            </WellProtectpage>} />
            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>} />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </>
  );
}

export default App;
