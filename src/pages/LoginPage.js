import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, VStack, Text, useToast } from '@chakra-ui/react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy credentials
    const dummyUsername = 'user';
    const dummyPassword = 'password';

    if (username === dummyUsername && password === dummyPassword) {
      toast({
        title: 'Login successful.',
        description: "Welcome to the Sale Order Management system.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate('/sale-order-management');
    } else {
      toast({
        title: 'Login failed.',
        description: "Please check your username and password.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack spacing={8} align="center" justify="center" h="100vh">
      <Box w="sm" p={8} borderWidth={1} borderRadius="lg" boxShadow="lg">
        <form onSubmit={handleLogin}>
          <VStack spacing={4} align="stretch">
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="full">
              Login
            </Button>
          </VStack>
        </form>
      </Box>
      <Text>
        Use the following dummy credentials: Username: <strong>user</strong>, Password: <strong>password</strong>
      </Text>
    </VStack>
  );
};

export default LoginPage;
