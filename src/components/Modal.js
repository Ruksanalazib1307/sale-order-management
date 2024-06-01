import React, { useEffect } from 'react';
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
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const Modal = ({ isOpen, onClose, saleOrder, onSave, isReadOnly }) => {
  const { handleSubmit, register, reset } = useForm({
    defaultValues: saleOrder,
  });

  useEffect(() => {
    reset(saleOrder);
  }, [saleOrder, reset]);

  const toast = useToast();

  const onSubmit = (values) => {
    onSave(values);
    toast({
      title: isReadOnly ? 'Sale Order Viewed' : 'Sale Order Saved',
      description: isReadOnly
        ? "The sale order details have been viewed."
        : "The sale order has been saved successfully.",
      status: isReadOnly ? 'info' : 'success',
      duration: 3000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isReadOnly ? 'View Sale Order' : 'Edit Sale Order'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mb={4}>
              <FormLabel>Customer</FormLabel>
              <Input
                type="text"
                {...register('customer', { required: true })}
                isReadOnly={isReadOnly}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Order Number</FormLabel>
              <Input
                type="text"
                {...register('orderNumber', { required: true })}
                isReadOnly={isReadOnly}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Status</FormLabel>
              <Input
                type="text"
                {...register('status', { required: true })}
                isReadOnly={isReadOnly}
              />
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
    </ChakraModal>
  );
};

export default Modal;
