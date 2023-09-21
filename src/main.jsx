import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App/App.jsx'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'

//main.jsx is rendering App.jsx 
// import BrowserRouter and wrap the App with Router
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
)
