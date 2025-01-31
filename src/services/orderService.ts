import api from '../api/api';
import { Order } from '../types/types';

export const getOrders = async (filters = {}) => {
    const queryString = new URLSearchParams(filters).toString();
    const url = `/orders${queryString ? `?${queryString}` : ''}`;
  
    return await api.get(url);
  };
  
  export const getOrderById = async (orderId: number) => {
    return await api.get(`/orders/${orderId}`);
  };
  
  export const createOrder = async (orderData: Order) => {
    return await api.post('/orders', orderData);
  };
  
  export const updateOrder = async (orderId: number , orderData: Order) => {
    return await api.put(`/orders/${orderId}`, orderData);
  };
  
  export const deleteOrder = async (orderId: number) => {
    return await api.delete(`/orders/${orderId}`);
  };

  export const updateOrderStatus = async (orderId: number, newStatus: string) => {
    return await api.patch(`/orders/${orderId}/status`, { status: newStatus });
};
