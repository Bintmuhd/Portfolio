import Link from 'next/link'
import {Box } from '@chakra-ui/react'

function Nav() {
    return (
        <> 
            <Box width="30%"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                my={30}
                fontSize="xs"
            color="#ff007f">
                 <Link href="/" _hover={{borderBottom: "2px solid white"}}><a>ME</a></Link>
                <Link href="/about"><a>MORE...</a></Link>
                 <Link href="/articles"><a>ARTICLES</a></Link>
                <Link href="/contact"><a>HIRE ME!</a></Link>
            </Box>
            
        </>
    )
}

export default Nav