import React, { useState } from 'react';
import { Button, HStack, VStack, Box } from '@chakra-ui/react';
import ActiveSaleOrders from './ActiveSaleOrders';
import CompletedSaleOrders from './CompletedSaleOrders';
import NewSaleOrderModal from '../components/NewSaleOrderModal';
import { sampleCustomers, sampleProducts } from '../data/sampleData';

const SaleOrderManagement = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSaleOrders, setActiveSaleOrders] = useState([]);
  const [customers, setCustomers] = useState(sampleCustomers);
  const [products, setProducts] = useState(sampleProducts);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveOrder = (newOrder) => {
    setActiveSaleOrders([...activeSaleOrders, newOrder]);
    closeModal(); // Close modal after saving
  };

  return (
    <VStack spacing="4" align="stretch">
      <HStack spacing="4">
        <Button
          onClick={() => setActiveTab('active')}
          variant={activeTab === 'active' ? 'solid' : 'outline'}
        >
          Active Sale Orders
        </Button>
        <Button
          onClick={() => setActiveTab('completed')}
          variant={activeTab === 'completed' ? 'solid' : 'outline'}
        >
          Completed Sale Orders
        </Button>
      </HStack>
      <Button alignSelf="flex-end" colorScheme="teal" onClick={openModal}>
        + Sale Order
      </Button>
      <Box w="100%">
        {activeTab === 'active' && <ActiveSaleOrders />}
        {activeTab === 'completed' && <CompletedSaleOrders />}
      </Box>
      <NewSaleOrderModal isOpen={isModalOpen} onClose={closeModal} onSave={handleSaveOrder} products={products} />
    </VStack>
  );
};

export default SaleOrderManagement;
