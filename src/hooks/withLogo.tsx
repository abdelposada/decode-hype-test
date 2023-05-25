'use client';

import { useColorModeValue } from '@chakra-ui/react';
import { ComponentType } from 'react';

export const withLogo =
  <T extends object>(Component: ComponentType<T & { logo: string }>) =>
  // eslint-disable-next-line react/display-name
  (props: T) => {
    const logo = useColorModeValue('/logo_light.png', '/logo_dark.png');

    return <Component {...props} logo={logo} />;
  };
