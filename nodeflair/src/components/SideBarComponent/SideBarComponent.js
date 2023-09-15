import { ScrollBox } from './SideBarComponentStyle.js';
import SmallBoxComponent from '../SmallBoxComponent/SmallBoxComponent';
import { useState } from "react"


function SideBarComponent(props) {
    const [selectedContainer, setSelectedContainer] = useState(null);
  
    const onSelect = (i) => {
      setSelectedContainer(i);
      props.setSelectedBox(props.boxes[i]);
    };
  
    return (
      <ScrollBox>
        {props.boxes.map((box, i) => (
          <SmallBoxComponent
            key={i}
            box={box}
            isSelected={selectedContainer === i}
            onSelect={() => onSelect(i)}
          />
        ))}
      </ScrollBox>
    );
  }

export default SideBarComponent;