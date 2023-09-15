import { useState, useEffect, useRef } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { SkillBox } from "./SkillsComponentStyle";

function SkillsComponent(props) {
    const { skills } = props;
    const [visibleSkills, setVisibleSkills] = useState(skills);
    const containerRef = useRef(null);
    const skillBoxRefs = useRef({});

    const calculateVisibleSkills = () => {
        if (containerRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          let totalWidth = 0;
          const tempVisibleSkills = [];
    
          for (let skill of skills) {
            const skillBoxRef = skillBoxRefs.current[skill];
            if (!skillBoxRef) continue;
    
            const skillBoxWidth = skillBoxRef.offsetWidth;
            totalWidth += skillBoxWidth;
    
            if (totalWidth <= containerWidth) {
              tempVisibleSkills.push(skill);
            } else {
              // Remove the last skill that caused the overflow
              tempVisibleSkills.pop();
              break;
            }
          }
    
          setVisibleSkills(tempVisibleSkills);
        }
      };

    useEffect(() => {

        calculateVisibleSkills();
    

        window.addEventListener("resize", calculateVisibleSkills);
        return () => {
          window.removeEventListener("resize", calculateVisibleSkills);
        };
      }, [skills]);

    return (
        <Flex mt="5px" alignItems="flex-start" ml="-10px" mr="-10px" display="inline-flex" ref={containerRef} flexShrink={0} overflow="hidden" maxW="100%" minW="100%">
            {visibleSkills.map((skill, i) => (
                <SkillBox
                    key={i}
                    whiteSpace="nowrap"
                    ref={(el) => (skillBoxRefs.current[skill] = el)}
                >
                    {skill}
                </SkillBox>
            ))}
            {visibleSkills.length < skills.length && <Box ml="1%">...</Box>}
        </Flex>
    );
}

export default SkillsComponent;
