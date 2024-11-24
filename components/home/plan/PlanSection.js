import React, { useState } from "react";
import { styles } from "../../../theme/styles";
import { breakpoints } from "../../lib/constants";
import { fonts } from "../../../lib/constants";
import { colors } from "../../lib/constants";
import styled from "@emotion/styled";
import { FaCheck, FaTimes } from "react-icons/fa";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Switch,
  Text,
} from "@chakra-ui/react";
import Column from "../../util/Column";
import { planData } from "../../../data/data";

const P = styled(Text)`
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1rem;
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

const PlanSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => setIsYearly(!isYearly);

  // Extract all unique features from the "Advanced" plan
  const advancedFeatures = planData.find((plan) => plan.item === "Advanced")[
    "data-list"
  ];

  return (
    <Column
      mt="60px"
      p={{ base: 6, md: 16, lg: 32 }}
      alignItems="center"
      borderTop={BORDER}
      borderBottom={BORDER}
      gap={{ base: 4, md: 8, xl: 8 }}
      bg="sectionBg.light"
    >
      <Text
        fontSize={{ base: "1.4rem", md: "2rem", lg: "3rem" }}
        fontFamily="Bebas Neue"
        textAlign="center"
      >
        There’s an E-mint store for every business
      </Text>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        gap={{ base: 0, md: 4 }}
        alignItems="center"
      >
        <Flex
          gap={{ base: 2, sm: 4 }}
          alignItems="center"
          justifyContent={{ base: "space-around" }}
          wrap={{ base: "wrap", md: "nowrap" }}
        >
          <P fontFamily={fonts.Suisse}>Pay Monthly</P>
          <Switch
            // colorScheme="blackAlpha"
            sx={{
              ".chakra-switch__track": {
                bg: "#CBD5E0",
                _checked: {
                  bg: "black",
                },
              },
              ".chakra-switch__thumb": {
                bg: "black",
                _checked: {
                  bg: "white",
                },
              },
            }}
            size="lg"
            isChecked={isYearly}
            onChange={handleToggle}
          />
          <P fontFamily={fonts.Suisse}>Pay Annually</P>
        </Flex>
        <P
          fontFamily={fonts.Suisse}
          bgColor="orange.light"
          py={1}
          px={2}
          textColor="white"
          textAlign="center"
          w={{ base: "fit-content" }}
          mt={{ base: 4, md: 0 }}
        >
          50% OFF ALL YEAR
        </P>
      </Flex>

      <Grid
        templateColumns={{
          base: "1fr",
          md: "1fr 1fr",
          xl: "1fr 1fr 1fr 1fr",
        }}
        gap={6}
        py={{ base: 4, md: 6, lg: 8 }}
        px={{ base: 4, md: 6, lg: 10, xl: 20 }}
      >
        {planData?.map((plan) => (
          <GridItem key={plan?.id}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              bg="white"
              borderRadius="4px"
              px={6}
              py={10}
              gap={4}
              minH="full"
            >
              <Text
                fontSize={{ base: "1.75rem", md: "2rem", lg: "2.5rem" }}
                fontFamily="Bebas Neue"
              >
                {plan?.item}
              </Text>

              <Text as="s" color="gray.500" fontFamily={fonts.Suisse}>
                BDT {isYearly ? plan.oldYearlyPayment : plan.oldMonthlyPayment}
              </Text>
              <Flex>
                <Text
                  fontSize={{ base: "1.75rem", md: "2rem", lg: "2.5rem" }}
                  fontWeight={500}
                  fontFamily="Bebas Neue"
                >
                  {isYearly ? plan["yearly-payment"] : plan["monthly-payment"]}
                </Text>
                <P fontWeight={500}>{isYearly ? "/yr*" : "/mo*"}</P>
              </Flex>

              <Text color="gray.500" mb={4} fontFamily={fonts.Suisse}>
                Save BDT{" "}
                {isYearly ? plan["yearly-savings"] : plan["monthly-savings"]}
                {isYearly ? "/yr" : "/mo"} for 3 months
              </Text>

              <ThinkButton w="full">
                <ButtonText>Buy now</ButtonText>
              </ThinkButton>

              <Column gap={2} w="full">
                {advancedFeatures
                  // Sort to bring features present in the current plan to the top
                  .sort((a, b) => {
                    const isAIncluded = plan["data-list"].includes(a);
                    const isBIncluded = plan["data-list"].includes(b);
                    return isAIncluded === isBIncluded
                      ? 0
                      : isAIncluded
                      ? -1
                      : 1;
                  })
                  .map((feature, index) => (
                    <Flex
                      key={index}
                      gap={2}
                      alignItems="center"
                      fontFamily={fonts.Suisse}
                      w="full"
                    >
                      <Box flexShrink={0} flexBasis="auto">
                        {plan["data-list"].includes(feature) ? (
                          <FaCheck color="green" size="1em" />
                        ) : (
                          <FaTimes color="red" size="1em" />
                        )}
                      </Box>
                      <Text flexGrow={1} fontFamily={fonts.Suisse}>
                        {feature}
                      </Text>
                    </Flex>
                  ))}
              </Column>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Column>
  );
};

export default PlanSection;
