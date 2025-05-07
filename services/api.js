import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';

const productService = axios.create({
  baseURL: `${API_BASE_URL}/product-service/api`,
  timeout: 5000,
});

const orderService = axios.create({
  baseURL: `${API_BASE_URL}/order-service/api`,
  timeout: 5000,
});

export const getProducts = async () => {
  try {
    const response = await productService.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const createOrder = async (orderData) => {
  try {
    const response = await orderService.post('/orders', orderData);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export default {
  getProducts,
  createOrder,
};