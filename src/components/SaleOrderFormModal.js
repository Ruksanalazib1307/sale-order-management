// src/components/SaleOrderFormModal.js
import React from 'react';
import {
  Modal,
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
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const SaleOrderFormModal = ({ isOpen, onClose, saleOrder, onSave, isReadOnly }) => {
  const { handleSubmit, register, setValue } = useForm();
  const toast = useToast();

  React.useEffect(() => {
    if (saleOrder) {
      setValue('customer', saleOrder.customer);
      setValue('orderNumber', saleOrder.orderNumber);
      setValue('status', saleOrder.status);
    }
  }, [saleOrder, setValue]);

  const onSubmit = (values) => {
    if (!isReadOnly) {
      onSave(values);
      toast({
        title: 'Sale Order Updated.',
        description: "The sale order has been updated successfully.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isReadOnly ? 'View Sale Order' : 'Edit Sale Order'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mb={4}>
              <FormLabel>Customer</FormLabel>
              <Input type="text" {...register('customer')} isReadOnly={isReadOnly} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Order Number</FormLabel>
              <Input type="text" {...register('orderNumber')} isReadOnly={isReadOnly} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Status</FormLabel>
              <Input type="text" {...register('status')} isReadOnly={isReadOnly} />
            </FormControl>
            {!isReadOnly && (
              <Button mt={4} type="submit" colorScheme="teal">
                Save
              </Button>
            )}
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderFormModal;
