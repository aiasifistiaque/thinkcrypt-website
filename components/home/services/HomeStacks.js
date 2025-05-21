import { Image } from '@chakra-ui/react';
import { useGetAllQuery } from '../../../store';
import CardSection from '../../services/website/CardSection';
import StackCard from './StackCard';

const HomeStacks = () => {
	const { data, isFetching } = useGetAllQuery({
		path: 'techstacks',
		sort: '-priority',
		limit: 4,
		filters: {
			ifFeatured: true,
			status: 'published',
		},
	});
	return (
		<CardSection
			btnText='View Our Tech Stacks'
			href='/techstacks'
			title='Technology Stack'
			bg='whitesmoke'>
			{data &&
				data?.doc?.map((item, i) => (
					<StackCard
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
