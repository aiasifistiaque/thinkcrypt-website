import React from 'react';
import Page from '../util/Page/Page.js';
import { Stack, Grid } from '@chakra-ui/react';
import SectionHeading from '../home/sectionheading/SectionHeading.js';
import EachTeamMember from './EachTeamMember.jsx';
import SectionHeadingWithoutMaxH from '../home/sectionheading/SectionHeading.js';
import { Container } from '../home/sectionheading/styles.js';
const teamMemebers = [
	{
		img: '/team/amiyo-vai.jpg',
		name: 'Asif Istiaque',
		designation: 'Co-Founder and CEO',
	},
	{
		img: '/team/anik-vaiya.jpg',
		name: 'Anik Hossain',
		designation: 'Co-founder and COO',
	},
	{
		img: '/team/Manazir-vai.jpg',
		name: 'Manazir Irteza Rashid',
		designation: 'Head of Sales & Marketing',
	},
	{
		img: '/team/Nurain.jpg',
		name: 'Sumratul Nurain',
		designation: 'Chief Human Resource & Administration Officer',
	},
	{
		img: '/team/ashikuzzaman-abir.png',
		name: 'MD Ashikuzzaman Abir',
		designation: 'Software Engineer',
	},
	{
		img: '/team/mubin.png',
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

function TeamPage() {
	return (
		<Page>
			<Stack spacing={0} w='full'>
				<SectionHeadingWithoutMaxH
					heading='MEET THE CREATORS OF TEAM THINKCRYPT '
					subHeading={'Our Team'}
				>
					Get to know the faces behind the innovation and learn about the
					collaborative spirit that fuels our mission to create cutting-edge
					solutions that empower individuals and businesses to safeguard their
					digital assets with confidence.
				</SectionHeadingWithoutMaxH>
				<Container>
					<Grid
						w='full'
						align-items='center'
						templateColumns={{ base: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}
						gap={{ base: 4, md: 8 }}
						// gap={4}
						px={{ base: 2, md: 4 }}
						pt={{ base: 2, md: 4 }}
						pb={'90px'}
					>
						{teamMemebers.map((member, i) => (
							<EachTeamMember key={i} {...member} />
						))}
					</Grid>
				</Container>
			</Stack>
		</Page>
	);
}

export default TeamPage;
