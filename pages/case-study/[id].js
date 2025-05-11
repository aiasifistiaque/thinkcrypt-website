import React from 'react';
import Page from '../../components/util/Page/Page';
import {
	Flex,
	Grid,
	GridItem,
	Image,
	Link,
	Skeleton,
	SkeletonText,
	Stack,
	Wrap,
} from '@chakra-ui/react';
import SectionHeading from '../../components/home/sectionheading/SectionHeading';
import { useRouter } from 'next/router';
import { useGetByIdQuery } from '../../store';
import SubSection from '../../components/home/sectionheading/SubSection';
import ColumnSection from '../../components/home/sectionheading/ColumnSection';
import { styles } from '../../theme/styles';
import { SectionText } from '../../components/home/sectionheading/styles';

const CaseStudy = () => {
	const router = useRouter();
	const { id } = router.query;
	const { data } = useGetByIdQuery({ path: 'portfolios', id });
	if (!data)
		return (
			<Page>
				<Stack
					spacing={4}
					pt='48px'
					w='full'>
					<SectionHeading
						heading='Processing... '
						subHeading='Processing...'>
						<SkeletonText
							w='full'
							noOfLines={4}
							spacing='4'
							skeletonHeight='2'
						/>
					</SectionHeading>
				</Stack>
			</Page>
		);
	return (
		<Page>
			<Stack
				spacing={2}
				pt='48px'>
				<ColumnSection
					heading={data?.name}
					subHeading={'Project Overview'}>
					{data?.overview}
				</ColumnSection>
				<Image
					src={data?.coverImage}
					w='100%'
					h='600px'
					objectFit='cover'
				/>
				<SectionHeading
					heading={data?.challengeTitle}
					subHeading={'The Challenge'}>
					{data?.challengeDescription}
				</SectionHeading>
				<ColumnSection
					heading={`The Client: ${data?.companyName}`}
					subHeading={data?.companyCategory}
					notText>
					<Stack spacing={4}>
						<SectionText>
							Company URL:{' '}
							<Link
								isExternal
								href={data?.companyUrl}>
								{data?.companyUrl}
							</Link>
						</SectionText>
						<SectionText>{data?.companyDescription}</SectionText>
					</Stack>
				</ColumnSection>
				<SubSection
					heading={data?.approachTitle}
					subHeading={'Our Approach'}>
					{data?.approachDescription}
				</SubSection>
				<ColumnSection
					heading={data?.solutionTitle}
					subHeading={'Our Solution'}>
					{data?.solutionDescription}
				</ColumnSection>
				<Flex
					px={6}
					borderTop={styles?.border.light}
					borderBottom={styles?.border.light}>
					<Grid
						gridTemplateColumns={'1fr 1fr'}
						borderLeft={styles?.border.light}>
						{data?.solutionFeatures?.map((item, index) => (
							<Flex
								gap={2}
								p={{ base: 4, md: 8 }}
								borderRight={styles?.border.light}
								key={index}
								flexDir='column'
								borderBottom={styles?.border.light}>
								<Flex
									fontWeight='800'
									fontFamily='Michroma'
									fontSize='1.5rem'>
									{item?.title}
								</Flex>
								<Flex
									fontFamily='Michroma'
									fontSize='1rem'>
									{item?.description}
								</Flex>
							</Flex>
						))}
					</Grid>
				</Flex>

				<ColumnSection
					heading={'Project Images'}
					subHeading={'Gallery'}
					notText>
					<Grid gridTemplateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}>
						{data?.images?.map((item, index) => (
							<GridItem
								key={index}
								p={2}
								borderRight={index % 3 === 0 ? styles?.border.light : 'none'}
								borderBottom={styles?.border.light}>
								<Image
									src={item}
									w='100%'
									h='300px'
									objectFit='cover'
								/>
							</GridItem>
						))}
					</Grid>
				</ColumnSection>

				{data?.showLiveUrl && (
					<SubSection
						heading={data?.name}
						subHeading={'View Project'}>
						Visit Project Link <br /> <br />
						<Link
							href={data?.liveUrl}
							mt={4}
							pt={2}
							isExternal>
							{data?.liveUrl}
						</Link>
					</SubSection>
				)}

				<SubSection
					heading={data?.techStackTitle}
					subHeading={'Tech Stack'}>
					<Wrap
						pt={8}
						gap={4}
						flex={1}>
						{data?.techStack?.map((item, index) => (
							<Flex
								key={index}
								px={2}
								border='1px solid black'
								py={1}>
								{item?.toString()}
							</Flex>
						))}
					</Wrap>
				</SubSection>
			</Stack>
		</Page>
	);
};

export default CaseStudy;
