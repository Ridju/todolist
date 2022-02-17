import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PrivateWrapper from "./utils/privateWrapper";

function App() {
  return (
    <div className='flex h-screen justify-center items-center bg-gray-900'>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route element={<PrivateWrapper />}>
            <Route path='/' element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
