import './App.css'
import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Content from '../components/layout/Content'
import logoImage from '../assets/logo.png'
import LeftBar from '../components/layout/LeftBar'

const App = props => (
  <div className="App">
    <BrowserRouter>
      <LeftBar logo={logoImage} />
      <Content />
    </BrowserRouter>
  </div>
);

export default App;
