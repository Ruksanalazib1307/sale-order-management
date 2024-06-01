import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, VStack, FormControl, FormLabel } from '@chakra-ui/react';

const LoginForm = ({ onSubmit }) => {
  const { handleSubmit, control } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing="4">
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Controller
            name="username"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Controller
            name="password"
            control={control}
            render={({ field }) => <Input type="password" {...field} />}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Login
        </Button>
      </VStack>
    </form>
  );
};

export default LoginForm;
