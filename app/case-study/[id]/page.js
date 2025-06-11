'use client';

import React from 'react';
import Page from '../../../components/util/Page/Page';
import {
	Flex,
	Grid,
	GridItem,
	Image,
	Link,
	Skeleton,
	SkeletonText,
	Stack,
	useColorMode,
	Wrap,
} from '@chakra-ui/react';
import SectionHeading from '../../../components/home/sectionheading/SectionHeading';
import { useParams } from 'next/navigation';
import { useGetByIdQuery } from '../../../store';
import SubSection from '../../../components/home/sectionheading/SubSection';
import ColumnSection from '../../../components/home/sectionheading/ColumnSection';
import { colors, styles } from '../../../theme/styles';
import { SectionText } from '../../../components/home/sectionheading/styles';
import TitleSection from '../../../components/home/about-us/TitleSection';
import UpdatedColumn from '../../../components/home/sectionheading/UpdatedColumn';
import { fonts } from '../../../lib/constants';

const CaseStudy = () => {
	const params = useParams();
	const { id } = params;
	const { data } = useGetByIdQuery({ path: 'portfolios', id });
	const { colorMode } = useColorMode();

	const bg = colorMode == 'dark' ? colors.background.dark : colors.background.light;
	const text = colorMode == 'dark' ? colors.text.dark : colors.text.light;
	const secondary = colorMode == 'dark' ? colors.textSecondary.dark : colors.textSecondary.light;
	const blue = colorMode == 'dark' ? colors.text.blue : colors.text.darkBlue;
	const card = colorMode == 'dark' ? colors.card.dark : colors.card.light;

	if (!data)
		return (
			<Page theme={colorMode}>
				<Stack
					spacing={0}
					w='full'>
					<TitleSection
						colorMode={colorMode}
						top
						pb={0}
						title={'Processing...'}
						titleTop={`Project: Processing...`}>
						Processing...
					</TitleSection>
				</Stack>
			</Page>
		);

	return (
		<Page theme={colorMode}>
			<Stack
				spacing={0}
				pt='0'>
				<TitleSection
					colorMode={colorMode}
					top
					pb={0}
					title='Case Study'
					titleTop={`Project: ${data?.name}`}>
					{data?.overview}
				</TitleSection>

				<Image
					src={data?.coverImage}
					w='100%'
					h='600px'
					objectFit='cover'
				/>
				<TitleSection
					colorMode={colorMode}
					py={0}
					pb={0}
					index='02'
					title='The Challenge'
					titleTop={data?.challengeTitle}>
					{data?.challengeDescription}
				</TitleSection>

				<UpdatedColumn
					theme={colorMode}
					heading={`The Client: ${data?.companyName}`}
					subHeading={data?.companyCategory}
					notText>
					<Stack spacing={4}>
						<SectionText color={text}>
							Company URL:{' '}
							<Link
								isExternal
								href={data?.companyUrl}>
								{data?.companyUrl}
							</Link>
						</SectionText>
						<SectionText color={text}>{data?.companyDescription}</SectionText>
					</Stack>
				</UpdatedColumn>
				<SubSection
					theme={colorMode}
					heading={data?.approachTitle}
					subHeading={'Our Approach'}>
					{data?.approachDescription}
				</SubSection>

				<TitleSection
					colorMode={colorMode}
					py={0}
					pb={0}
					index='04'
					title={data?.solutionTitle}
					titleTop={'The'}
					titleBottom='Solution'>
					{data?.solutionDescription}
				</TitleSection>

				<Flex
					py={8}
					pb={16}
					px={6}
					bg={bg}>
					<Grid
						gridTemplateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}
						gap={4}>
						{data?.solutionFeatures?.map((item, index) => (
							<Flex
								borderRadius='12px'
								bg={card}
								gap={2}
								p={{ base: 4, md: 8 }}
								key={index}
								flexDir='column'>
								<Flex
									fontWeight='800'
									fontFamily={fonts.title}
									fontSize={{ base: '1.5rem', md: '2.5rem' }}>
									{item?.title}
								</Flex>
								<Flex
									fontFamily={fonts.primary}
									fontSize='1rem'>
									{item?.description}
								</Flex>
							</Flex>
						))}
					</Grid>
				</Flex>

				<UpdatedColumn
					borderTop='1px solid'
					borderTopColor={card}
					borderBottom='1px solid'
					borderBottomColor={card}
					theme={colorMode}
					heading={'Project Images'}
					subHeading={'Gallery'}
					notText>
					<Grid gridTemplateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}>
						{data?.images?.map((item, index) => (
							<GridItem
								key={index}
								p={2}
								borderRight={index % 3 === 0 ? styles?.border.light : 'none'}>
								<Image
									src={item}
									w='100%'
									h='300px'
									objectFit='cover'
								/>
							</GridItem>
						))}
					</Grid>
				</UpdatedColumn>

				{data?.showLiveUrl && (
					<TitleSection
						colorMode={colorMode}
						py={0}
						pb={0}
						index='06'
						title={'Visit Project Link'}
						btn={'Visit Project'}
						btnHref={data?.liveUrl}
						titleTop={`URL: ${data?.name}`}>
						<Link
							href={data?.liveUrl}
							mt={4}
							pt={2}
							isExternal>
							{'URL:' + ' ' + data?.liveUrl}
						</Link>
					</TitleSection>
				)}

				<SubSection
					theme={colorMode}
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
								border='1px solid'
								borderColor={text}
								color={text}
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
