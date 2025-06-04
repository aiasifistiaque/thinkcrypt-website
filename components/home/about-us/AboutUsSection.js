import { fonts, layout } from '../../lib/constants';
import { padding } from '../../../lib/constants';
import { colors, styles } from '../../../theme/styles';
import TitleSection from './TitleSection';

const AboutUsSection = ({ theme }) => {
	return (
		<TitleSection
			colorMode={theme}
			pb='92px'
			titleTop='We started'
			title='Our vision'
			index='02'
			titleBottom='back in 2017'
			paragraph='	Today, we build scalable platforms and custom tools that streamline workflows and drive
					growth. From MVPs to full systems, we handle the tech so businesses can focus on reaching
					their goals.'>
			Thinkcrypt was founded in 2017 to help entrepreneurs turn their ideas into reality using
			modern technology. We aimed to bridge the gap between vision and execution by delivering
			smart, cost-efficient digital solutions.
		</TitleSection>
	);
};

export default AboutUsSection;
