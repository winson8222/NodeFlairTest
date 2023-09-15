import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import BackgroundComponent from './components/BackgroundComponent/BackgroundComponent'
import SmallBoxComponent from "./components/SmallBoxComponent/SmallBoxComponent"
import { ChakraProvider, VStack, Flex } from '@chakra-ui/react'
import SideBarComponent from './components/SideBarComponent/SideBarComponent';
import { useState } from 'react';
import { allExamples } from './example/ExampleJobs';
import BoxDetailsComponent from './components/BoxDetailsComponent/BoxDetailsComponent';
import MainComponenet from './components/MainComponent/MainComponent';


function App() {
  const [selectedBox, setSelectedBox] = useState(null);
  const examples = allExamples
  return (
    <ChakraProvider>
    <BackgroundComponent >
      <MainComponenet></MainComponenet>
    </BackgroundComponent>
  </ChakraProvider>
  );
}

export default App;
