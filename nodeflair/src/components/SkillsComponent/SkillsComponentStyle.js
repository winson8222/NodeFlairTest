import {Box, chakra} from "@chakra-ui/react"

export const SkillBox = chakra(Box, {
    baseStyle: {
        borderRadius: 'md',
        alignItems: 'center', // Vertically align content in the middle
        justifyContent: 'center', // Horizontally align content in the middle
        display: 'flex', // Ensure the content is displayed as a flex container
        color: "#838383",
        bg: "#f1f1f1",
        py: "5px", // Use padding on top and bottom instead of separate pt and pb
        px: "8px", // Use padding on left and right instead of separate pl and pr
        ml: "1%",
        fontFamily: "Roboto Mono",
        fontSize: "14px",
        fontWeight: "bold",
        whiteSpace: 'nowrap',
        overflow: "hidden",
        textOverflow: "ellipsis",
        flexShrink: 0,
        flexGrow: 0, 
        minH:"31px",
        maxH: "31px"
    },
})