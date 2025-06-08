// src/pages/Store.jsx
import React, { useEffect, useState } from 'react'
import {
  fetchStoreProducts,
  fetchStoreProductFiles,
  createStoreOrder,
} from '../services/api'

const BACKEND = "https://79cf-217-31-72-114.ngrok-free.app"

export default function Store() {
  const [items, setItems]   = useState([])
  const [status, setStatus] = useState('')

  useEffect(() => {
    async function loadAll() {
      // 1) fetch products
      const products = await fetchStoreProducts()
      // 2) for each, fetch its files and stash the first image path
      const withImages = await Promise.all(
        products.map(async p => {
          const files = await fetchStoreProductFiles(p.id)
          return {
            ...p,
            image: files.length > 0 ? files[0].file_path : null,
          }
        })
      )
      setItems(withImages)
    }
    loadAll()
  }, [])

  const handleBuy = async id => {
    try {
      await createStoreOrder({ apartment_id: id })
      setStatus('✅ Order placed!')
    } catch (e) {
      setStatus('❌ Something went wrong')
    }
  }

  return (
    <div>
      <h1>Online Store</h1>
      {status && <p>{status}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map(p => (
          <div key={p.id} className="card bg-white shadow rounded-lg overflow-hidden">
            {p.image && (
              <img
                src={`${BACKEND}${p.image}`}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-gray-700">{p.price} ₴</p>
              <button
                onClick={() => handleBuy(p.id)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
