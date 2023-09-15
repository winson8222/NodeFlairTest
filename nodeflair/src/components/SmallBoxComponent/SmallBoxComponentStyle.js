import { Box, chakra, Flex, Image, position } from "@chakra-ui/react";


export const Container = chakra(Flex, {
    baseStyle: {
        position: 'relative',
        width: '427px',
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignContent: 'center',
        mb: "5px"
        
      },
  }) 

export const SubContainer = chakra(Flex, {
baseStyle: props => ({
    position: 'relative',
    width: '427px',
    flexDirection: 'column',
    justifyContent: 'center',
    bg: 'white',
    borderRadius: '8px',
    pt: '20px',
    pr: '20px',
    pl: '20px',
    pb: "15px",
    font: "14px",
    fontWeight: "400",
    cursor: 'pointer',
    transition: 'transform 0.2s, boxShadow 0.2s',
    
    _hover: props.isSelected 
    ? {
        transform: 'translateY(-3px)',
        boxShadow: '0 0 0 3px #1fc76a'
    }
    : { 
        transform: 'translateY(-3px)', 
        boxShadow: '0 5px 10px rgba(0,0,0,0.2)' 
    },
boxShadow: props.isSelected ? '0 0 0 3px #1fc76a' : ''
}),
});


