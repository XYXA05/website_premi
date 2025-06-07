// src/services/api.js
import axios from 'axios'

// Base URL from Vite env var or fallback
const BASE_URL = "https://218d-217-31-72-114.ngrok-free.app"
const API = axios.create({ baseURL: BASE_URL })

// Fetch apartments, handling possible nested array
export async function fetchApartments() {
  try {
    const res = await API.get('/get_orders_and_photo_all/')
    const data = res.data
    console.log('fetchApartments → raw response data:', data)

    // Detect HTML error page (ngrok landing) and alert
    if (typeof data === 'string' && data.trim().startsWith('<')) {
      console.error('fetchApartments → received HTML instead of JSON. Please check your ngrok tunnel or API URL.')
      throw new Error('Invalid API response: HTML received')
    }

    const payload = data
    if (Array.isArray(payload)) {
      return payload
    }
    if (Array.isArray(payload.apartments)) {
      return payload.apartments
    }
    if (Array.isArray(payload.results)) {
      return payload.results
    }
    return []
  } catch (err) {
    console.error('fetchApartments error:', err)
    return []
  }
}
export const fetchApartmentById = id =>
  API.get(`/get_apartment_and_photo/${id}`).then(res => res.data)

export const submitContact = data =>
  API.post('/orders/', data).then(res => res.data)

export const fetchStoreProducts = () =>
  API.get('/store/apartments/').then(res => res.data)
export const createStoreOrder = data =>
  API.post('/store/orders/', data).then(res => res.data)

export const fetchCleaningOrders = () =>
  API.get('/cleaning/orders/').then(res => res.data)
export const createCleaningOrder = data =>
  API.post('/cleaning/orders/', data).then(res => res.data)

export const fetchDesignProjects = () =>
  API.get('/design/projects/').then(res => res.data)
export const createDesignOrder = data =>
  API.post('/bot/design_order/', data).then(res => res.data)

export const fetchRenovationProjects = () =>
  API.get('/renovation/projects/').then(res => res.data)
export const createRenovationOrder = data =>
  API.post('/bot/renovation_order/', data).then(res => res.data)

export const fetchStoreProductFiles = storeId =>
  API.get(`/files/store/${storeId}`).then(res => res.data)
