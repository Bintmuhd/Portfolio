import Link from 'next/link'
import { Box, Image, Text, Heading, SimpleGrid } from '@chakra-ui/react'
import Typical from 'react-typical' 
import { FaGithub, FaTwitter, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

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
                
                <Box display="flex" flexDirection="column">
                    <Box pb="3%" color="#d3b59c">
                    <Heading fontSize="5xl">Hi! I am Bint Muhd</Heading>
                    <Text fontSize="lg">I am a Front-End Developer based in Abuja, Nigeria</Text>
                </Box>
                    <SimpleGrid columns={4} spacing={2} mx="30%" pb="20%">
                    <Link href="https://github.com/">
                        <a>
                        <FaGithub className="icon" color="#d3b59c"/>
                        </a>
                    </Link>

                    <Link href="https://twitter.com/BintCodes">
                        <a>
                        <FaTwitter className="icon" color="#d3b59c"/>
                        </a>
                    </Link>
                        
                    <Link href="https://www.instagram.com/bint.muhd/" >
                        <a>
                                <FaInstagramSquare className="icon" p="20" color="#d3b59c" style={{width:"20px"}}/>
                        </a>
                    </Link>
                        
                    <Link href="https://www.linkedin.com/in/bintmuhd/">
                        <a>
                        <FaLinkedin className="icon" color="#d3b59c"/>
                        </a>
                    </Link>
                        
                    

                </SimpleGrid>
                </Box>
            </Box>
            
        
        </>
        
    )
}

export default Main
