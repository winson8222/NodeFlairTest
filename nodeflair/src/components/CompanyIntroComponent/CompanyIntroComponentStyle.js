import { background, Box, chakra, Flex, Image, Text } from "@chakra-ui/react";


export const ImageLogo = chakra(Image, {
    baseStyle: {
        objectFit: "cover",  // To ensure the image covers the entire 1:1 space
        aspectRatio: 1,
        minW: "45px",
        maxW: "45px",
        minH: "45px",
        maxH: "45px",
    },
  })

export const SalaryTag = chakra(Flex, {
    baseStyle: {
        borderRadius: 'md',
        alignItems: 'center', // Vertically align content in the middle
        justifyContent: 'center', // Horizontally align content in the middle
        display: 'flex', // Ensure the content is displayed as a flex container
        color: "#3a3a3a",
        bg: "#f1f1f1",
        py: "3px", // Use padding on top and bottom instead of separate pt and pb
        px: "7px", // Use padding on left and right instead of separate pl and pr
        ml: "4%",
        fontFamily: "open sans,helvetica",
        fontSize: "14px",
        whitespace: "nowrap"

    },
    
})

export const TagContainer = chakra(Flex, {
  baseStyle: {
    minH: "31px",
    maxH: "31px",
    bg: "#DDF7E9",
    py: "5px", // Use padding on top and bottom instead of separate pt and pb
    px: "8px", // Use padding on left and right instead of separate pl and pr
    borderRadius: 'md',
    ml:'auto',
    display: 'flex', // Ensure the content is displayed as a flex container
    alignItems: 'center', // Vertically align content in the middle
    justifyContent: 'center', // Horizontally align content in the middle
    color: "#1fc76a",
  }
});

  export const TimeText = chakra(Text, {
    baseStyle: {
        fontSize: "14px",
        color: "#1fc76a",
        fontWeight: "600",
        borderRadius:"5px" 
    }
  })

  export const TitleText = chakra(Text, {
    baseStyle: {
        fontSize: "16px",
        color: "#3a3a3a",
        fontWeight: "700",
        lineHeight: "1.5em",
        mb: "0"
    }
  })