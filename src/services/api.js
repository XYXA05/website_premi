import axios from 'axios';
const BASE_URL = process.env.VITE_API_URL
const API = axios.create({ baseURL: BASE_URL })
console.log("API →", process.env.BASE_URL);
export const fetchApartments = () =>
  API.get('/get_orders_and_photo_all/').then(res => res.data);

export const fetchApartmentById = id =>
  API.get(`/get_apartment_and_photo/${id}`).then(res => res.data);

export const submitContact = (data) =>
  API.post('/orders/', data).then(res => res.data);
export const fetchStoreProducts = () =>
  API.get('/store/apartments/').then(res => res.data);
export const createStoreOrder = data =>
  API.post('/store/orders/', data).then(res => res.data);

export const fetchCleaningOrders = () =>
  API.get('/cleaning/orders/').then(res => res.data);
export const createCleaningOrder = data =>
  API.post('/cleaning/orders/', data).then(res => res.data);

export const fetchDesignProjects = () =>
  API.get('/design/projects/').then(res => res.data);
export const createDesignOrder = data =>
  API.post('/bot/design_order/', data).then(res => res.data);

export const fetchRenovationProjects = () =>
  API.get('/renovation/projects/').then(res => res.data);
export const createRenovationOrder = data =>
  API.post('/bot/renovation_order/', data).then(res => res.data);
export const fetchStoreProductFiles = storeId =>
  API.get(`/files/store/${storeId}`).then(res => res.data);