import React, { useState } from 'react';
import { Box, Text, IconButton } from '@chakra-ui/react';
import { FiMoreHorizontal } from 'react-icons/fi';
import Modal from '../components/Modal';

const CompletedSaleOrders = () => {
  const completedSaleOrders = [
    {
      id: 1,
      customer: 'Lakshman',
      orderNumber: 'SO-003',
      status: 'Completed',
    },
    {
      id: 2,
      customer: 'Bharat',
      orderNumber: 'SO-004',
      status: 'Completed',
    },
  ];

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };

  return (
    <Box>
      <Text fontSize="2xl" mb="4">Completed Sale Orders</Text>
      {completedSaleOrders.map(order => (
        <Box key={order.id} p="4" borderWidth="1px" borderRadius="lg" mb="4" position="relative">
          <Text><strong>Order Number:</strong> {order.orderNumber}</Text>
          <Text><strong>Customer:</strong> {order.customer}</Text>
          <Text><strong>Status:</strong> {order.status}</Text>
          <IconButton
            icon={<FiMoreHorizontal />}
            position="absolute"
            top="4"
            right="4"
            onClick={() => openModal(order)}
          />
        </Box>
      ))}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        saleOrder={selectedOrder}
        onSave={() => {}}
        isReadOnly={true}
      />
    </Box>
  );
};

export default CompletedSaleOrders;
