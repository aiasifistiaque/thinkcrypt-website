import React from 'react';
import Page from '../util/Page/Page.js';
import { Stack, Grid, Flex } from '@chakra-ui/react';
import EachTeamMember from './EachTeamMember';
import SectionHeadingWithoutMaxH from '../home/sectionheading/SectionHeading.js';
import { Container } from '../home/sectionheading/styles.js';
import { styles } from '../../theme/styles.js';
const teamMemebers = [
	{
		img: '/team/amiyo-vai.jpg',
		name: 'Asif Istiaque',
		designation: 'Co-Founder and CEO',
	},
	{
		img: '/team/anik-vaiya.jpg',
		name: 'Asif Hossain Anik',
		designation: 'Co-founder and COO',
	},
	{
		img: '/team/Manazir-vai.jpeg',
		name: 'Manazir Irteza Rashid',
		designation: 'Head of Sales & Marketing',
	},
	{
		img: '/team/Nurain.jpeg',
		name: 'Sumratul Nurain',
		designation: 'HR & Administration Officer',
	},
	{
		img: '/team/ashikuzzaman-abir.png',
		name: 'MD Ashikuzzaman Abir',
		designation: 'Software Engineer',
	},
	{
		img: '/team/mubin.jpg',
		name: 'Kazi Ehsanul Mubin',
		designation: 'Software Engineer',
	},
	{
		img: '/team/Anamika.png',
		name: 'Sadiya Afroze Anamika',
		designation: 'UI/UX Engineer',
	},
	{
		img: '/team/Afrid.jpg',
		name: 'Khondaker Samiul Alam Afrid',
		designation: 'Junior Executive, Marketing',
	},
	{
		img: '/team/Md-Aminul-Haque.jpg',
		name: 'Md Aminul Haque',
		designation: 'Junior Software Engineer',
	},

	{
		img: '/team/Arefin.jpg',
		name: 'Kazi Samsul Arefin',
		designation: 'Junior Software Engineer',
	},
	{
		img: '/team/Susan.jpg',
		name: 'Susan Jannat',
		designation: 'Junior UI/UX Designer ',
	},
	{
		img: '/team/Turzo.jpg',
		name: 'Jalal Uddin Turzo',
		designation: 'Junior Executive, Marketing',
	},
	{
		img: '/team/Sumit.jpg',
		name: 'Istiaque Ahmed Sumit',
		designation: 'Intern Frontend Developer',
	},
	{
		img: '/team/Parvez.jpg',
		name: 'Md Parvez',
		designation: 'Office Assistant',
	},
];

const BORDER = styles.border.light;

function TeamPage() {
	return (
		<Page>
			<Stack
				spacing={0}
				w='full'
				mt='42px'>
				<SectionHeadingWithoutMaxH
					heading='MEET THE CREATORS OF TEAM THINKCRYPT '
					subHeading={'Our Team'}
					pt={{ base: 2, md: 4 }}>
					Get to know the faces behind the innovation and learn about the collaborative spirit that
					fuels our mission to create cutting-edge solutions that empower individuals and businesses
					to safeguard their digital assets with confidence.
				</SectionHeadingWithoutMaxH>
				<Container
					pl={{ base: '24px', md: '128px' }}
					pr='24px'>
					<Flex borderLeft={BORDER}>
						<Grid
							pb='64px'
							w='full'
							align-items='center'
							templateColumns={{ base: '1fr 1fr', md: '1fr 1fr 1fr ' }}>
							{teamMemebers.map((member, i) => (
								<EachTeamMember
									key={i}
									img={member?.img}
									name={member?.name}
									designation={member?.designation}
								/>
							))}
						</Grid>
					</Flex>
				</Container>
			</Stack>
		</Page>
	);
}

export default TeamPage;
