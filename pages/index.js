import Head from 'next/head'
import { Box, Image, Text, Heading } from '@chakra-ui/react'
import Nav from '../src/components/Nav'
import Main from '../src/components/Main'
import Header from '../src/components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bint Muhd</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box background="black" height="full" display='flex' justifyContent='center' alignItems="center" flexDirection="column">
        <Header/>
        <Nav />
        <Main/>
      </Box>
      

      </>
  )
}
