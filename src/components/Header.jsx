import { Box, Image, Text, Heading } from '@chakra-ui/react'
import Typical from 'react-typical'


function Header() {


    return (
        <>
            <Box>
                <Heading display="flex"
                    justifyContent="center"
                    mt={10}
                fontSize="5xl">
                    Bint<Box color="#ff007f">-</Box> Muhd
                </Heading>
                <Text display="flex" justifyContent="center" fontSize="3xl" fontWeight="900">
                    <Typical
        steps={['Writer ✍', 2000, 'Developer 💻', 2000, 'Code Tutor 🎓', 2000]}
        loop={Infinity}
        wrapper="p"
      />
                </Text>
            </Box>
        </>
    )
}

export default Header
