import React from 'react';
import LottieAnimation from '../Lottie';
import Chat from '../Animation/chat.json';
import Resume from '../Animation/resume.json';
import Bg from '../Animation/background.json';

import { Box, Heading, Button, Text, Link, SimpleGrid } from '@chakra-ui/react';

import {
	FaGithub,
	FaTwitter,
	FaInstagramSquare,
	FaLinkedin,
	FaCodepen,
	FaMedium,
} from 'react-icons/fa';
import { GrDocumentPdf } from 'react-icons/gr';
import Typical from 'react-typical';

function Home() {
	return (
		<>
			<Box bg='#d8e9ff' color='#30305d' h='100vh'>
				<Box
					pl={['50%', , '70%', '80%', '87%']}
					w='100%'
					pt={['5%', , '5%', '2%']}
					display='flex'
					justifyContent='space-around'>
					<Button
						bg='transparent'
						_hover={{ bg: 'transparent' }}
						display='flex'
						flexDirection='column'>
						<LottieAnimation lotti={Resume} height={50} width={50} />
					</Button>
					<Button bg='transparent' _hover={{ bg: 'transparent' }}>
						<LottieAnimation
							lotti={Chat}
							height={50}
							width={50}
							_hover={{ display: 'none' }}
						/>
					</Button>
				</Box>
				<Box
					display='flex'
					flexDirection={['column', , 'column', 'row']}
					justifyContent={['center', , 'center', 'space-between']}
					pt={['20%', '', '30%', '30%', '10%']}>
					<Box px='6%'>
						<Heading
							fontSize={['6xl', , '8xl', '8xl', '8xl']}
							lineHeight='0.9'
							pb='2%'
							px={['5%', , '10%', '5%']}>
							BINT MUHD
						</Heading>
						<Box
							px={['6%', , '10%', '6%']}
							fontSize={['3xl', , '4xl', '4xl']}
							fontweight='bold'>
							<Typical
								steps={[
									'Writer ✍',
									2000,
									'Developer 💻',
									2000,
									'Code Tutor 🎓',
									2000,
								]}
								loop={Infinity}
								wrapper='p'
							/>
						</Box>
					</Box>

					<SimpleGrid
						columns={['3 ', , '6', '1']}
						spacing={5}
						px={['12%', , '15%', '2%']}
						pt={['15%', , '10%', '3%']}>
						<Link href='https://github.com/'>
							<Box>
								<FaGithub />
							</Box>
						</Link>

						<Link href='https://twitter.com/BintCodes'>
							<Box>
								<FaTwitter />
							</Box>
						</Link>

						<Link href='https://www.instagram.com/bint.muhd/'>
							<Box>
								<FaInstagramSquare />
							</Box>
						</Link>

						<Link href='https://www.linkedin.com/in/bintmuhd/'>
							<Box>
								<FaLinkedin />
							</Box>
						</Link>

						<Link href='https://www.linkedin.com/in/bintmuhd/'>
							<Box>
								<FaCodepen />
							</Box>
						</Link>

						<Link href='https://www.linkedin.com/in/bintmuhd/'>
							<Box>
								<FaMedium />
							</Box>
						</Link>
					</SimpleGrid>
				</Box>
			</Box>
		</>
	);
}

export default Home;
