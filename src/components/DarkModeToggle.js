import React from 'react';
import { useColorMode, Switch, Flex, Text } from '@chakra-ui/react';

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex align="center">
      <Text mr={2}>{colorMode === 'dark' ? 'Dark' : 'Light'} Mode</Text>
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
    </Flex>
  );
};

export default DarkModeToggle;
