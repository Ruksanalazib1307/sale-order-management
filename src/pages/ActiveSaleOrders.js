import React, { useState } from 'react';
import { Box, Text, IconButton } from '@chakra-ui/react';
import { FiMoreHorizontal } from 'react-icons/fi';
import Modal from '../components/Modal';

const ActiveSaleOrders = () => {
  const activeSaleOrders = [
    {
      id: 1,
      customer: 'Ram',
      orderNumber: 'SO-001',
      status: 'In Progress',
    },
    {
      id: 2,
      customer: 'Shyam',
      orderNumber: 'SO-002',
      status: 'In Progress',
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

  const handleSave = (updatedOrder) => {
    console.log('Updated Order:', updatedOrder);
    closeModal();
  };

  return (
    <Box>
      <Text fontSize="2xl" mb="4">Active Sale Orders</Text>
      {activeSaleOrders.map(order => (
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
        onSave={handleSave}
        isReadOnly={false}
      />
    </Box>
  );
};

export default ActiveSaleOrders;
