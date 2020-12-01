import Link from 'next/link'
import { Box, Image, Text, Heading, SimpleGrid } from '@chakra-ui/react'
import Typical from 'react-typical' 
import {FaTwitter} from 'react-ic'



function Main() {
    return (
        <>
            <Box display="flex" justifyContent="space-around" height="80%" alignItems="center" px="40">
            <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">  
            <Image src="https://res.cloudinary.com/bint/image/upload/v1606219072/profile_wb8ne1.jpg" w="90%" borderRadius="full" border="3px solid #d3b59c"/>
             <Text display="flex" justifyContent="center" fontSize="3xl" fontWeight="900" color="#d3b59c">
                <Typical
                steps={['Writer ✍', 2000, 'Developer 💻', 2000, 'Code Tutor 🎓', 2000]}
                loop={Infinity}
                wrapper="p"
                />
            </Text>

                </Box> 
                <Box pb="10%" color="#d3b59c">
                    <Heading fontSize="5xl">Hi! I am Bint Muhd</Heading>
                    <Text fontSize="lg">I am a Front-End Developer based in Abuja, Nigeria</Text>
                </Box>
                <SimpleGrid>
                    
                </SimpleGrid>
            </Box>
            
        
        </>
        
    )
}

export default Main
