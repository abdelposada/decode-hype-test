import React from 'react';
import { useColorMode, useColorModeValue, IconButton, IconButtonProps } from '@chakra-ui/react';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';

const ColorModeSwitch: React.FC<Omit<IconButtonProps, 'aria-label'>> = (props) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(SunIcon, MoonIcon);
  const color = useColorModeValue('orange.300', 'gray.50');

  return (
    <IconButton
      aria-label="Theme toggle"
      variant="ghost"
      onClick={toggleColorMode}
      zIndex="sticky"
      border="1px solid"
      borderColor="transparent"
      transition="box-shadow .2s ease, border-color 0.3s ease, color 0.3s ease"
      _hover={{
        textDecoration: 'none',
        borderColor: 'accent',
        boxShadow: `0 2px 40px -4px var(--chakra-colors-accent)`
      }}
      _focus={{
        borderColor: 'none'
      }}
      outline="none"
      color={color}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default ColorModeSwitch;
