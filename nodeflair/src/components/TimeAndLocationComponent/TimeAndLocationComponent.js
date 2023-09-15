import {Flex, Text} from "@chakra-ui/react"
import { TimeText, LocationText } from "./TimeAndLocationComponentStyle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


function LocationComponent(props) {
    const { location } = props
    return (
    <LocationText>
    <Flex alignItems="center"> 
        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '4px', width:"15%" }} />
        {location}
    </Flex>
    </LocationText>

    )
    
}

function TimeAndLocationComponent(props) {
    const {time, location} = props

    return (
        <Flex justifyContent="flex-start" width="60%">
            <TimeText>{time}</TimeText>
            <LocationComponent location={location}></LocationComponent>
        </Flex>
    )
    
}

export default TimeAndLocationComponent