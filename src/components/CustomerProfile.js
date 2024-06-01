// CustomerProfile.js
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const CustomerProfile = ({ customers }) => {
  return (
    <Box>
      <Text fontSize="2xl" mb="4">Customer Profiles</Text>
      {customers.map(customer => (
        <Box key={customer.id} p="4" borderWidth="1px" borderRadius="lg" mb="4">
          <Text><strong>Name:</strong> {customer.name}</Text>
          <Text><strong>Email:</strong> {customer.email}</Text>
          <Text><strong>Location:</strong> {customer.location_name}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default CustomerProfile;
