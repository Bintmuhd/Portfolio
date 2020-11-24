import Link from 'next/link'
import { Box, Image, Text, Heading } from '@chakra-ui/react'


function Main() {
    return (
        <Box display="flex" justifyContent="space-around" my={20} width="100%">
            <Image
                borderRadius="full"
                border="2px solid #ff007f"
                boxSize="400px"
                objectFit="cover"       
                src="https://res.cloudinary.com/bint/image/upload/v1606219072/profile_wb8ne1.jpg"
                alt="Bint Muhd"
                
            />
            <Box width="30%" display="flex" my={30} flexDirection="column" color="#ff007f">
                 <Heading textAlign="center" fontSize="7xl">
                    Hello, I'm Bint Muhd
                </Heading>
                <Text textAlign="center" my={10} fontSize="2xl"> I am a Front-end Developer in Abuja, Nigeria</Text>
                <Box display="flex" flexWrap="wrap" width="18%" justifyContent="center" border="2px solid white" >
                <Link href="/"><a>IN</a></Link>
                <Link href=""><a>GI</a></Link>
                <Link href=""><a>TW</a></Link>
                <Link href=""><a>LI</a></Link>
                <Link href=""><a>CO</a></Link>
                <Link href=""><a>MI</a></Link>
            </Box>
            </Box>   
            
        </Box>
    )
}

export default Main
