import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BackgroundComponent from './components/BackgroundComponent/BackgroundComponent'
import SmallBoxComponent from "./components/SmallBoxComponent/SmallBoxComponent"
import { ChakraProvider, VStack } from '@chakra-ui/react'
import SideBarComponent from './components/SideBarComponent/SideBarComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <App></App>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
