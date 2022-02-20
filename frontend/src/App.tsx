import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { PrivateWrapper } from "./utils";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className='flex min-h-screen bg-gray-900 pb-10'>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route element={<PrivateWrapper />}>
            <Route path='/' element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
