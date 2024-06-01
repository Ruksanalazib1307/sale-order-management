// src/components/NewSaleOrderModal.js
import React, { useState } from 'react';
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
  Box,
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm, useFieldArray, Controller } from 'react-hook-form';

const NewSaleOrderModal = ({ isOpen, onClose, onSave }) => {
  const { handleSubmit, register, control, reset } = useForm({
    defaultValues: {
      customer: '',
      orderNumber: '',
      status: '',
      invoice_date: new Date(),
      products: [],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: 'products',
  });

  const toast = useToast();

  const onSubmit = (values) => {
    onSave({
      ...values,
      id: Math.random().toString(36).substr(2, 9), // Generate a random ID for the new order
    });
    toast({
      title: 'Sale Order Created',
      description: 'The new sale order has been created successfully.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    reset();
    onClose();
  };

  const addProduct = () => {
    append({ name: '', skus: ['SKU1', 'SKU2', 'SKU3'] }); // Add SKUs with random values
  };

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mb={4}>
              <FormLabel>Customer</FormLabel>
              <Input
                type="text"
                {...register('customer', { required: true })}
                placeholder="Enter customer name"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Order Number</FormLabel>
              <Input
                type="text"
                {...register('orderNumber', { required: true })}
                placeholder="Enter order number"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Status</FormLabel>
              <Input
                type="text"
                {...register('status', { required: true })}
                placeholder="Enter order status"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Invoice Date</FormLabel>
              <Controller
                control={control}
                name="invoice_date"
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                  />
                )}
              />
            </FormControl>

            <Button mb={4} colorScheme="teal" onClick={addProduct}>
              + Add Product
            </Button>

            <Accordion allowMultiple>
              {fields.map((product, index) => (
                <AccordionItem key={product.id}>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Product {index + 1}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <FormControl mb={4}>
                      <FormLabel>Product Name</FormLabel>
                      <Input
                        type="text"
                        {...register(`products.${index}.name`, { required: true })}
                        placeholder="Enter product name"
                      />
                    </FormControl>

                    <FormControl mb={4}>
                      <FormLabel>SKUs</FormLabel>
                      {product.skus.map((sku, skuIndex) => (
                        <Checkbox
                          key={skuIndex}
                          {...register(`products.${index}.skus.${skuIndex}`)}
                        >
                          {sku}
                        </Checkbox>
                      ))}
                    </FormControl>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>

            <Button mt={4} type="submit" colorScheme="teal">
              Save
            </Button>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default NewSaleOrderModal;
