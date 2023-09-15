import { Flex, Spacer, Image, AspectRatio } from '@chakra-ui/react'
import { SubContainer, Container, ImageLogo } from './SmallBoxComponentStyle'

import CompanyIntroComponent from '../CompanyIntroComponent/CompanyIntroComponent'

function SmallBoxComponent(props) {
    const { box, isSelected, onSelect } = props;
    return (
    <Container>
        <SubContainer
            isSelected={isSelected}  
            onClick={onSelect}>
                <CompanyIntroComponent box={box}></CompanyIntroComponent>
        </SubContainer>
    </Container>
    )
}

export default SmallBoxComponent    