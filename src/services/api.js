// src/services/api.js
import axios from 'axios'

// Base URL from Vite env var or fallback
const BASE_URL = "https://79cf-217-31-72-114.ngrok-free.app"

// Create an axios instance that skips ngrok browser warning
export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    // ngrok free-plan: skip the HTML warning page
    'ngrok-skip-browser-warning': 'true',
  },
})

// Fetch apartments
export async function fetchApartments() {
  const res = await API.get('/get_orders_and_photo_all/')
  return res.data
}

// Fetch a single apartment by ID
export const fetchApartmentById = id =>
  API.get(`/get_apartment_and_photo/${id}`).then(res => res.data)

// Submit contact/order
export const submitContact = data =>
  API.post('/orders/', data).then(res => res.data)

// Store products
export const fetchStoreProducts = () =>
  API.get('/store/apartments/').then(res => res.data)
export const createStoreOrder = data =>
  API.post('/store/orders/', data).then(res => res.data)

// Cleaning orders
export const fetchCleaningOrders = () =>
  API.get('/cleaning/orders/').then(res => res.data)
export const createCleaningOrder = data =>
  API.post('/cleaning/orders/', data).then(res => res.data)

// Design projects
export const fetchDesignProjects = () =>
  API.get('/design/projects/').then(res => res.data)
export const createDesignOrder = data =>
  API.post('/bot/design_order/', data).then(res => res.data)

// Renovation projects
export const fetchRenovationProjects = () =>
  API.get('/renovation/projects/').then(res => res.data)
export const createRenovationOrder = data =>
  API.post('/bot/renovation_order/', data).then(res => res.data)

// Store product files
export const fetchStoreProductFiles = storeId =>
  API.get(`/files/store/${storeId}`).then(res => res.data)
