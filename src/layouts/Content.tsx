'use client';

import { FC, PropsWithChildren } from 'react';
import { Container } from '@chakra-ui/react';

const Content: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container as="main" flexDirection="column" display="flex" maxWidth="7xl" pt={[4, 4, 8]} flex="1">
      {children}
    </Container>
  );
};

export default Content;
