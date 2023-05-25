'use client';

import { Flex } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex wrap="nowrap" direction="column" h="full">
      {children}
    </Flex>
  );
};

export default Wrapper;
