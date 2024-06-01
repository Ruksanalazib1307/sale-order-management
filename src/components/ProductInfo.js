// ProductDetails.js
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const ProductDetails = ({ products }) => {
  return (
    <Box>
      <Text fontSize="2xl" mb="4">Product Details</Text>
      {products.map(product => (
        <Box key={product.id} p="4" borderWidth="1px" borderRadius="lg" mb="4">
          <Text><strong>Product Name:</strong> {product.name}</Text>
          <Text><strong>Category:</strong> {product.category}</Text>
          <Text><strong>Brand:</strong> {product.brand}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default ProductDetails;
