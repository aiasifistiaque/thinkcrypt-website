'use client';

import { createContext, useContext } from 'react';

// The panel's shared site details (lib/siteInfo), handed down from the root layout
const SiteInfo = createContext(null);

export const SiteInfoProvider = ({ value, children }) => <SiteInfo.Provider value={value}>{children}</SiteInfo.Provider>;

export const useSiteInfo = () => useContext(SiteInfo);
