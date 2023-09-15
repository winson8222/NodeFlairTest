import React, { useState, useEffect } from 'react';
import '../../index.css';
import { Flex } from '@chakra-ui/react';
import SideBarComponent from '../SideBarComponent/SideBarComponent';
import { allExamples } from '../../example/ExampleJobs';
import BoxDetailsComponent from '../BoxDetailsComponent/BoxDetailsComponent';

function MainComponenet() {
  const [selectedBox, setSelectedBox] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 800);  // Initial check
  const examples = allExamples;

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 800);
    };

    handleResize();  // Call once initially for situations where SSR doesn't get window size

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Flex 
      direction={isSmallScreen ? 'column' : 'row'}
      align={isSmallScreen ? 'center' : 'flex-start'}  // Adjust for small screens
      justify="flex-start"
    >
      <SideBarComponent boxes={examples} setSelectedBox={setSelectedBox} />
      {!isSmallScreen && (  // Only render details when not on small screen
        <div>
          {selectedBox ? (
            <BoxDetailsComponent box={selectedBox} />
          ) : (
            <BoxDetailsComponent box={examples[0]} />
          )}
        </div>
      )}
    </Flex>
  );
}

export default MainComponenet;
