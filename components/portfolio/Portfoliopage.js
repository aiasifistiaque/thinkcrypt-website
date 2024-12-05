import React from "react";
import SectionHeading from "../home/sectionheading/SectionHeading";
import Page from "../util/Page/Page";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import { Heading, Stack, Flex, Grid } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { breakpoints } from "../lib/constants";
import { styles } from "../../theme/styles";

const data = [
  {
    src: "/portfolio/home/mint-commerce.png",
    name: "Mint Commerce",
    type: "Web App",
    href: "https://admin-thinkcommerce.vercel.app",
  },
  {
    src: "/portfolio/home/event-pro.png",
    name: "Event Pro",
    type: "Web App",
    href: "https://eventpro-ticketing-frontend-production.vercel.app",
  },
  {
    src: "/projects/samc.svg",
    name: "SAMC Bangladesh",
    type: "Web App",
    href: "https://samcbangladesh.org",
  },
  {
    src: "/projects/livefresh.svg",
    name: "Live Fresh",
    type: "e-commerce",
    href: "https://livefreshbd.com/",
  },
  {
    src: "/projects/bazar.svg",
    name: "Bazar365",
    type: "E-Commerce",
    href: "https://bazar365.com",
  },
  {
    src: "/projects/challent.svg",
    name: "Challent",
    type: "Management web app",
    href: "https://challent.vercel.app/",
  },
  {
    src: "/projects/netsoon-new.png",
    name: "Netsooon",
    type: "Social Media Web app",
    href: "https://netsooon.vercel.app/",
  },
  {
    src: "/projects/checklist-new.png",
    name: "Checkliiist Inventory Management system",
    type: "Inventory Management Saas",
    href: "https://checkliiist.com",
  },
  {
    src: "/projects/arewa.svg",
    name: "Arewa Books",
    type: "Web App",
    href: "https://arewabooks.com",
  },

  {
    src: "/projects/weather-new.png",
    name: "Weather App",
    type: "iOs & Android App",
    href: "https://github.com/aiasifistiaque/weatherapp",
  },
  {
    src: "/portfolio/home/ui.jpg",
    name: "UI/UX projects",
    type: "UI/UX",
    href: "https://dribbble.com/thinkcrypt",
  },
];

const data2 = [
  {
    src: "/portfolio/home/krishi-swapno.png",
    name: "Krishi Swapno",
    type: "Web App",
    href: "https://krishi-shwapno-rouge.vercel.app",
  },
  {
    src: "/portfolio/home/mint-hongo.png",
    name: "Mint Go",
    type: "Web App",
    href: "https://mint-hongo.vercel.app",
  },
  {
    src: "/projects/shohoz-new.png",
    name: "Shohoz Air",
    type: "Air ticketing System",
    href: "https://air.shohoz.com/",
  },
  {
    src: "/projects/deshi-diary.svg",
    name: "Deshi Diary",
    type: "Business Listing Web app",
    href: "https://deshidiary.vercel.app/",
  },
  {
    src: "/projects/vincent.svg",
    name: `Vincent's Sphere`,
    type: "E-Commerce Web App",
    href: "https://vincentsphere.com",
  },
  {
    src: "/projects/oho.svg",
    name: "Oho ",
    type: "iOs App",
    href: "https://www.ohodating.com/",
  },
  {
    src: "/projects/identrix.svg",
    name: "Identrix",
    type: "Startup",
    href: "",
  },
  {
    src: "/projects/logo.svg",
    name: "Marketrol",
    type: "Facebook Marketing Solution",
    href: "https://marketrol.vercel.app",
  },
  {
    src: "/projects/grocery-new.png",
    name: "Grocery Shop",
    type: "Ecommerce webapp",
    href: "https://gshop-psi.vercel.app/",
  },

  {
    src: "/projects/dignity-new.png",
    name: "Dignity International Agency",
    type: "Web App",
    href: "https://dignityinternationalagency.com",
  },

  {
    src: "/projects/cipher-new.png",
    name: "Cipher Text",
    type: "iOs & Android App",
    href: "https://github.com/aiasifistiaque/chatmama",
  },
  {
    src: "/projects/legal-new.png",
    name: "Legal Template",
    type: "Web App",
    href: "https://template-legal.vercel.app/",
  },
  {
    src: "/portfolio/home/3.jpg",
    name: "ArewaBooks App",
    type: "iOs & Android App",
    href: "https://play.google.com/store/apps/details?id=com.arewa.arewabooksapp&hl=en_US&gl=US",
  },
];

const Row = styled(Grid)`
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const PortfolioContainer = styled(Flex)`
  min-height: 100vh;
  flex-direction: column;
`;

const BORDER = styles.border.light;

const Portfoliopage = () => {
  return (
    <Page>
      <Stack spacing={4} pt="48px">
        <SectionHeading heading="All of Our Work" subHeading="Our Projects">
          We{`'`}re passionate about design, innovation, brilliant ideas and the
          execution that brings it all together in one beautiful experience. If
          you are too, call or send us an email to get started.
        </SectionHeading>
        <PortfolioContainer>
          <Flex pt="16px" px="32px" borderLeft={BORDER} borderRight={BORDER}>
            <Heading fontFamily="Suisse" size="xl">
              Our Work
            </Heading>
          </Flex>
          <Grid
            templateColumns={{ base: "1fr", md: "4fr 3fr" }}
            mt="24px"
            px="24px"
            border={BORDER}
          >
            <Flex flexDir="column" gap={4} borderLeft={BORDER}>
              {data.map((item, i) => (
                <PortfolioItem item={item} key={i} href="/project" />
              ))}
            </Flex>
            <Flex flexDir="column" gap={4}>
              {data2.map((item, i) => (
                <PortfolioItem item={item} key={i} href="/project" />
              ))}
            </Flex>
          </Grid>
        </PortfolioContainer>
      </Stack>
    </Page>
  );
};

export default Portfoliopage;
