import { chakra, Flex } from "@chakra-ui/react"

export const DetailContainer = chakra(Flex, {
    baseStyle: {
    
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        bg: 'white',
        borderRadius: '8px',
        font: "14px",
        fontWeight: "400",
        cursor: 'pointer',
        justifyContent: 'center',
        alignItems: 'center',
        px: '179%',
        mt: '8px',
        mb: '8px'
    

    },
});