import React from 'react';
import Projectpage from '../../components/project/Projectpage';
import { pageMetadata } from '@/lib/mintSeo';

// SEO for /project comes from the Mint panel (Website → SEO)
export const generateMetadata = () => pageMetadata('/project');

export default function Project() {
	return <Projectpage />;
}
