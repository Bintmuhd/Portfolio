
import {Box, Heading, List, ListItem, Link} from '@chakra-ui/react'

function Nav() {
    return (
        <> 
        <Box height="20%">
                <Heading fontFamily='Montez, cursive' fontSize="7xl" color="#d3b59c" textAlign="center" >BintMuhd</Heading>
                <List display="flex" justifyContent="space-around" px="40%" py="3" textAlign="center" color="#d3b59c" fontSize="xs">
                    <Link>
                        <ListItem>MORE..</ListItem>
                    </Link>
                    <Link>
                        <ListItem>WORK</ListItem>
                    </Link>
                    <Link>
                        <ListItem>HIRE ME!</ListItem>
                    </Link>
                    
                </List>
        </Box>
                
    
            


            





            
        </>
    )
}

export default Nav