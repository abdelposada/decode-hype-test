'use client';

import { FC } from 'react';
import ColorModeSwitch from '@/components/ColorModeSwitch/ColorModeSwitch';
import { withLogo } from '@/hooks/withLogo';
import { Box, Container, Flex, Heading, Image } from '@chakra-ui/react';
import Link from 'next/link';

const Header: FC<{ logo: string }> = ({ logo }) => {
  return (
    <Container maxW="7xl">
      <Flex as="header" w="full" transition="background-color 0.5s, border-color 0.5s" py={3}>
        <Flex justify="space-between" align="center" flex="1" wrap="nowrap" mx={3}>
          <Flex as={Link} href="/">
            <Image src={logo} alt="logo" width="80px" />
          </Flex>
          <Flex>
            <Heading>Decode string</Heading>
          </Flex>
          <Flex>
            <ColorModeSwitch fontSize="3xl" ml="6" />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default withLogo(Header);
