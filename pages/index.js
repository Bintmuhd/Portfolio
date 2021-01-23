import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Index from '../src/components/Index';

import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Bint Muhd</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Index />
		</>
	);
}
