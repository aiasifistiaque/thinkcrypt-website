import { Image } from '@chakra-ui/react';
import { useGetAllQuery } from '../../../store';
import CardSection from '../../services/website/CardSection';
import StackCard from './StackCard';

const HomeStacks = () => {
	const { data, isFetching } = useGetAllQuery({
		path: 'techstacks',
		sort: '-priority',
		limit: 3,
		filters: {
			ifFeatured: true,
			status: 'published',
		},
	});
	return (
		<CardSection
			columns={3}
			colorMode='dark'
			btnText='View Our Tech Stacks'
			href='/techstacks'
			title='Technology Stack'>
			{data &&
				data?.doc?.map((item, i) => (
					<StackCard
						colorMode='dark'
						icon={
							<Image
								src={item?.icon}
								h='44px'
								w='44px'
								objectFit='contain'
							/>
						}
						tags={item?.tags}
						title={item?.name}
						description={item?.shortDescription}
						key={i}
					/>
				))}
		</CardSection>
	);
};

export default HomeStacks;
