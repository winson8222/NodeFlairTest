import { Box, Flex, Image, Text, Divider, VStack} from "@chakra-ui/react";
import { ImageLogo, TagContainer, TimeText } from "./CompanyIntroComponentStyle";
import TimeAndLocationComponent from "../TimeAndLocationComponent/TimeAndLocationComponent";
import { SalaryTag } from "./CompanyIntroComponentStyle";
import SkillsComponent from "../SkillsComponent/SkillsComponent";

function SalaryComponent(props) {
    const { salary , salaryTag } = props
    if (salary == "") {
        return null
    }
    return (
        <Flex flexWrap="nowrap">
            <Text fontWeight="600" fontSize="14px" paddingTop="3px" color="#3a3a3a" whiteSpace= "nowrap">{salary}</Text>
            {salaryTag != "" && <SalaryTag>{salaryTag}</SalaryTag>}
        </Flex>
    )
}

function CompanyIntroComponent(props) {
    const { box } = props

    const ratingWithStar = box.rating + " ★"
    return (
        <Box width="100%">
        <Flex width="100%" mb="5px">
            <ImageLogo src={box.image} />
            <VStack alignItems="flex-start" flex="1" flexShrink="0" spacing={0}>
                <Flex justifyContent="flex-start" alignItems="flex-start" flex="1">
                    <Text fontSize="14px" color="#3a3a3a" mr="5%" lineHeight="1.5" whiteSpace="nowrap">{box.name}</Text>
                    <Text fontSize="14px" lineHeight="1.5" whiteSpace="nowrap">{ratingWithStar}</Text>
                </Flex>
                <Text fontWeight="bold">{box.title}</Text>
                <TimeAndLocationComponent time={box.time} location={box.location}/>
                <SalaryComponent salary={box.salary} salaryTag={box.salaryTag}/>
            </VStack>
            <TagContainer>{box.tag}</TagContainer>
        </Flex>
        <Divider orientation='horizontal' borderColor="gray.300" />
        <SkillsComponent skills={box.skills}/>
    </Box>

    
    );
}

export default CompanyIntroComponent