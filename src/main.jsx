import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Report from './Report.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<App />} />
        <Route path='/report' element={<Report />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
