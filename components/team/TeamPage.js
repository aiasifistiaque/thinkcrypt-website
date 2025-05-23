import React from 'react';
import Page from '../util/Page/Page.js';
import { Stack, Grid, Flex } from '@chakra-ui/react';
import EachTeamMember from './EachTeamMember';
import SectionHeadingWithoutMaxH from '../home/sectionheading/SectionHeading.js';
import { Container } from '../home/sectionheading/styles.js';
import { colors, styles } from '../../theme/styles.js';
import TitleSection from '../home/about-us/TitleSection.js';
const teamMemebers = [
	{
		img: '/team/amiyo-vai.jpg',
		name: 'Asif Istiaque',
		designation: 'Co-Founder and CEO',
	},
	{
		img: '/team/anik-vaiya.jpg',
		name: 'Muhammad Asif Hossain',
		designation: 'Co-founder and COO',
	},
	{
		img: '/team/Manazir-vai.jpeg',
		name: 'Manazir Irteza Rashid',
		designation: 'Head of Sales & Marketing',
	},
	// {
	//   img: "/team/Nurain.jpeg",
	//   name: "Sumratul Nurain",
	//   designation: "HR & Administration Officer",
	// },
	{
		img: '/team/Anamika.png',
		name: 'Sadiya Afroze Anamika',
		designation: 'Product Manager',
	},
	{
		img: '/team/Arefin.jpg',
		name: 'Kazi Samsul Arefin',
		designation: 'Sr. Software Engineer',
	},

	// {
	//   img: "/team/ashikuzzaman-abir.png",
	//   name: "MD Ashikuzzaman Abir",
	//   designation: "Software Engineer",
	// },
	// {
	//   img: "/team/mubin.jpg",
	//   name: "Kazi Ehsanul Mubin",
	//   designation: "Software Engineer",
	// },
	// {
	// 	img: '/team/Md-Aminul-Haque.jpg',
	// 	name: 'Md Aminul Haque',
	// 	designation: 'Software Engineer',
	// },
	{
		img: '/team/Abeer.jpg',
		name: 'Naimul Haq Abeer',
		designation: 'Software Engineer',
	},
	{
		img: '/team/Sampod.jpg',
		name: 'Khandaker Ahsan Akib',
		designation: 'Executive, Business Development',
	},
	{
		img: '/team/siam.png',
		name: 'Siamul Hassan',
		designation: 'Jr. Software Engineer',
	},
	{
		img: '/team/Sojib.jpg',
		name: 'Sajib Hasan',
		designation: 'Jr. Software Engineer',
	},
	{
		img: '/team/Afrid.jpg',
		name: 'Khondaker Samiul Alam Afrid',
		designation: 'Jr. Executive, Marketing',
	},
	// {
	//   img: "/team/Susan.jpg",
	//   name: "Susan Jannat",
	//   designation: "Junior UI/UX Designer ",
	// },
	// {
	//   img: "/team/Turzo.jpg",
	//   name: "Jalal Uddin Turzo",
	//   designation: "Junior Executive, Marketing",
	// },
	{
		img: '/team/Sumit.jpg',
		name: 'Istiaque Ahmed Sumit',
		designation: 'Intern Software Engineer',
	},

	// {
	//   img: "/team/Parvez.jpg",
	//   name: "Md Parvez",
	//   designation: "Office Assistant",
	// },
];

const BORDER = styles.border.light;
const colorMode = 'dark';

function TeamPage() {
	return (
		<Page>
			<Stack
				spacing={0}
				w='full'>
				<TitleSection
					colorMode={colorMode}
					top
					titleTop='Meet the Creators'
					titleBottom='of Thinkcrypt'
					title='Our Team'>
					Get to know the faces behind the innovation and learn about the collaborative spirit that
					fuels our mission to create cutting-edge solutions that empower individuals and businesses
					to safeguard their digital assets with confidence.
				</TitleSection>

				<Container
					borderColor={colorMode == 'dark' ? colors?.text?.dark : colors?.border?.light}
					bg={colorMode == 'dark' ? colors?.background?.dark : colors?.background?.light}
					pl={{ base: '24px', md: '24px' }}
					pr='24px'>
					<Flex>
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
