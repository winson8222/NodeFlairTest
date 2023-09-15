import { DetailContainer } from "./BoxDetailsComponenetStyle";

function BoxDetailsComponent(props) {
    const { box } = props
    return (
        <DetailContainer h="98vh" w="19.5vw">{box.title}</DetailContainer>
    )
        
    
}

export default BoxDetailsComponent;