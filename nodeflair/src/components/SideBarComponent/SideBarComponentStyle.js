import { chakra, Box } from "@chakra-ui/react";

export const ScrollBox = chakra(Box, {
    baseStyle: {
        minH : "100vh",
        minW: "445px",
        overflowY : "auto",
        overflowX: "hidden",
        w : "400px",
        borderColor : "gray.200",
        pt : "1vh",
        pb : "1vh",
        pl : "7px",
        justifyContent: 'center',
        alignItems: 'center',
        
    },
        
})

