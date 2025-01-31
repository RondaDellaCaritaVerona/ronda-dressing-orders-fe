import api from '../api/api';
import { Guest } from '../types/types';

export const getGuests = async (filters = {}) => {
    const queryString = new URLSearchParams(filters).toString(); // Convert filters to query string
    const url = `/guests${queryString ? `?${queryString}` : ''}`;

    return await api.get(url);
};

export const getGuestById = async (guestId: number) => {
    return await api.get(`/guests/${guestId}`);
};

export const createGuest = async (guestData: Guest) => {
    return await api.post('/guests', guestData);
};

export const updateGuest = async (guestId: number, guestData: Guest) => {
    return await api.put(`/guests/${guestId}`, guestData);
};

export const deleteGuest = async (guestId: number) => {
    return await api.delete(`/guests/${guestId}`);
};
