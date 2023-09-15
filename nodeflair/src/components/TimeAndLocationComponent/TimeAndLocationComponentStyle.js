import {chakra, Text} from "@chakra-ui/react"


export const TimeText = chakra(Text, {
    baseStyle: {
        fontSize: "14px",
        color: "#1fc76a",
        fontWeight: "600",
        borderRadius:"5px",
        whiteSpace: "nowrap",
        mr: "8px"
    }
  })

  export const LocationText = chakra(Text, {
    baseStyle: {
        fontSize: "14px",
        color: "#838383",
        whitespace: "nowrap"
    }
  })