import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, FormControl, FormLabel, FormErrorMessage, Select } from '@chakra-ui/react';

const SaleOrderForm = ({ initialData = {}, onSave }) => {
  const { handleSubmit, control, errors } = useForm({
    defaultValues: initialData,
  });

  const onSubmit = (data) => {
    onSave(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.customer_id}>
        <FormLabel htmlFor="customer_id">Customer ID</FormLabel>
        <Controller
          as={Input}
          name="customer_id"
          control={control}
          rules={{ required: 'Customer ID is required' }}
        />
        <FormErrorMessage>{errors.customer_id && errors.customer_id.message}</FormErrorMessage>
      </FormControl>
      
      <FormControl isInvalid={errors.invoice_no}>
        <FormLabel htmlFor="invoice_no">Invoice Number</FormLabel>
        <Controller
          as={Input}
          name="invoice_no"
          control={control}
          rules={{ required: 'Invoice Number is required' }}
        />
        <FormErrorMessage>{errors.invoice_no && errors.invoice_no.message}</FormErrorMessage>
      </FormControl>
      
      <FormControl isInvalid={errors.invoice_date}>
        <FormLabel htmlFor="invoice_date">Invoice Date</FormLabel>
        <Controller
          as={Input}
          type="date"
          name="invoice_date"
          control={control}
          rules={{ required: 'Invoice Date is required' }}
        />
        <FormErrorMessage>{errors.invoice_date && errors.invoice_date.message}</FormErrorMessage>
      </FormControl>
      
      <FormControl isInvalid={errors.items}>
        <FormLabel htmlFor="items">Items</FormLabel>
        <Controller
          as={Select}
          name="items"
          control={control}
          rules={{ required: 'Items are required' }}
        >
          <option value="">Select Item</option>
          {/* Map through products */}
        </Controller>
        <FormErrorMessage>{errors.items && errors.items.message}</FormErrorMessage>
      </FormControl>
      
      <Button mt={4} colorScheme="teal" type="submit">
        Save
      </Button>
    </form>
  );
};

export default SaleOrderForm;
