// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Box, Flex, Spacer, Heading } from '@chakra-ui/react';
import LoginPage from './pages/LoginPage';
import SaleOrderManagement from './pages/SaleOrderManagement';
import theme from './theme';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box p={4}>
          <Flex align="center">
            <Heading as="h1" size="lg">
              Sale Order Management
            </Heading>
            <Spacer />
            <DarkModeToggle />
          </Flex>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/sale-order-management" element={<SaleOrderManagement />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;



// // src/App.js
// import React, { useState } from 'react';
// import { ChakraProvider, Box, Button } from '@chakra-ui/react';
// import CustomerProfile from './components/CustomerProfile';
// import ProductDetails from './components/ProductInfo';
// import NewSaleOrderModal from './components/NewSaleOrderModal';
// import ActiveSaleOrders from './pages/ActiveSaleOrders';
// import CompletedOrders from './pages/CompletedSaleOrders';

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeSaleOrders, setActiveSaleOrders] = useState([]);
//   const [completedOrders, setCompletedOrders] = useState([]);

//   const handleSaveSaleOrder = (order) => {
//     setActiveSaleOrders([...activeSaleOrders, order]);
//   };

//   return (
//     <ChakraProvider>
//       <Box p={4}>
//         <Button onClick={() => setIsModalOpen(true)}>Create New Sale Order</Button>
//         <NewSaleOrderModal
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           onSave={handleSaveSaleOrder}
//         />
//         <CustomerProfile customer={{
//           id: 9,
//           customer_profile: {
//             id: 11908,
//             name: "Ram",
//             color: [182, 73, 99],
//             email: "jesus_christ@church.com",
//             pincode: "Mumbai",
//             location_name: "Mumbai, Maharashtra, India",
//             type: "C",
//             profile_pic: null,
//             gst: ""
//           }
//         }} />
//         <ProductDetails product={{
//           id: 209,
//           display_id: 8,
//           owner: 1079,
//           name: "New Product",
//           category: "The god of War",
//           characteristics: "New Product Characteristics",
//           features: "",
//           brand: "New Product Brand",
//           sku: [
//             {
//               id: 248,
//               selling_price: 54,
//               max_retail_price: 44,
//               amount: 33,
//               unit: "kg",
//               quantity_in_inventory: 0,
//               product: 209
//             },
//             {
//               id: 247,
//               selling_price: 32,
//               max_retail_price: 32,
//               amount: 33,
//               unit: "kg",
//               quantity_in_inventory: 0,
//               product: 209
//             },
//             {
//               id: 246,
//               selling_price: 23,
//               max_retail_price: 21,
//               amount: 22,
//               unit: "kg",
//               quantity_in_inventory: 1,
//               product: 209
//             }
//           ],
//           updated_on: "2024-05-24T12:46:41.995873Z",
//           adding_date: "2024-05-24T12:46:41.995828Z"
//         }} />
//         <ActiveSaleOrders activeSaleOrders={activeSaleOrders} />
//         <CompletedOrders completedOrders={completedOrders} />
//       </Box>
//     </ChakraProvider>
//   );
// };

// export default App;
