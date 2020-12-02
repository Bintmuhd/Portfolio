import Head from 'next/head'
import { Box, Image, Text, Heading } from '@chakra-ui/react'
import Nav from '../src/components/Nav'
import Main from '../src/components/Main'
import Mid from '../src/components/Mid'
import Footer from '../src/components/Footer'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bint Muhd</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box h="100vh" bg=" #fff8df">
        <Nav />
        <Main/>
        
     </Box>

      </>
  )
}
