'use client';

import { Box, Container, Link } from '@chakra-ui/react';

const Footer = () => (
  <Container as="footer" py="6" alignItems="center" textAlign="center" maxW="7xl">
    <Box>
      Made with ❤️ by Abdel Posada for{' '}
      <Link href="https://digitalhype.mx/" target="_blank">
        Digitalhype
      </Link>{' '}
      using:{' '}
      <Link href="https://nextjs.org/" target="_blank">
        Next.js
      </Link>
      ,{' '}
      <Link href="https://chakra-ui.com/" target="_blank">
        Chakra UI
      </Link>
      ,{' '}
      <Link href="https://www.framer.com/motion/" target="_blank">
        Framer Motion
      </Link>
    </Box>
    <Box mt="2">© 2023 Abdel Posada</Box>
  </Container>
);

export default Footer;
