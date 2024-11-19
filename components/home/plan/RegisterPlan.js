/* eslint-disable @next/next/link-passhref */
import React from "react";
import { styles } from "../../../theme/styles";
import { breakpoints, layout } from "../../lib/constants";
import Column from "../../util/Column";
import { fonts } from "../../../lib/constants";
import { colors } from "../../lib/constants";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";

const P = styled(Text)`
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.2rem;
    line-height: 1.6;
    max-width: 50vw;
  }
`;

const ThinkButton = styled(Center)`
  cursor: pointer;
  margin: 32px 0;
  height: 50px;
  width: 220px;
  background-color: ${colors.charcole};
  transition: 0.2s;
  &:hover {
    @media (min-width: ${breakpoints.desktop}) {
      background-color: ${colors.orange};
    }
  }
  &:active {
    background-color: black.800;
  }
`;

const ButtonText = styled(Text)`
  line-height: 0;
  color: white;
  font-weight: bold;
  letter-spacing: 0.75px;
  font-size: 1rem;
`;

const BORDER = styles.border.light;

const RegisterPlan = () => {
  return (
    <Column
      mt="60px"
      px={{ base: 6, md: 16, lg: 16, xl: 32 }}
      borderTop={BORDER}
      borderBottom={BORDER}
    >
      <Flex
        w="full"
        // maxW={layout.MAX_W}
        //mx='auto'
        borderLeft={BORDER}
        borderRight={BORDER}
        px={{ base: "16px", md: "24px", xl: "0px" }}
        py={{ base: "24px", lg: "128px" }}
        //my='60px'
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={12}
          alignItems="center"
        >
          <GridItem>
            <Flex
              w={{
                base: "full",
                md: "full",
                lg: "full",
                // xLarge: "500px", xxl: "600px"
              }}
              justifyContent="center"
            >
              <Image
                src="./e-mint/mint-illustrationv4.png"
                alt="mint-section"
                w="full"
              />
            </Flex>
          </GridItem>
          <GridItem>
            <Column
              gap={{ base: 2, md: 4, xl: 6 }}
              justifyItems="center"
              alignItems={{ base: "center", md: "start", lg: "start" }}
            >
              <Text
                fontSize={{
                  base: "1.5rem",
                  md: "2rem",
                  lg: "2rem",
                  xl: "3rem",
                }}
                fontFamily="Bebas Neue"
              >
                Inventory Management System
              </Text>
              <Text
                fontFamily={fonts.Suisse}
                fontSize={{ lg: "1rem", xl: "1.25rem" }}
                lineHeight={1.6}
              >
                A simple and feature-rich inventory and e-commerce solution that
                integrates seamlessly with your business operations. Built by
                our trusted partner, MINT is a cutting-edge application designed
                to streamline inventory management, invoicing, billing, and
                customer engagement—all in one platform
              </Text>
              <Text
                fontFamily={fonts.Suisse}
                fontSize={{ lg: "1rem", xl: "1.25rem" }}
                lineHeight={1.6}
              >
                Click below to receive the latest updates.
              </Text>
              <Text
                fontFamily={fonts.Suisse}
                fontSize={{ lg: "1rem", xl: "1.25rem" }}
                lineHeight={1.6}
              >
                Want to know more? Join our pre-launch phase!
              </Text>
              <Link href="/mint">
                <ThinkButton>
                  <ButtonText>Learn More</ButtonText>
                </ThinkButton>
              </Link>
            </Column>
          </GridItem>
        </Grid>
      </Flex>
    </Column>
  );
};

export default RegisterPlan;
