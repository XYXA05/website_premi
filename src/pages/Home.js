// src/pages/Home.js
import React, { useEffect, useState } from 'react'
import { fetchApartments } from '../services/api'

export default function Home() {
  const [apartments, setApartments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchApartments()
      .then(data => {
        console.log('Apartments fetched:', data)
        setApartments(data)
      })
      .catch(err => {
        console.error('Error fetching apartments:', err)
        setError('Failed to load apartments')
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Loading apartments...</p>
  if (error) return <p>{error}</p>
  if (!apartments.length) return <p>No apartments available.</p>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {apartments.map(apt => (
        <div key={apt.id} className="card p-4 shadow rounded">
          <h2 className="text-xl font-semibold">{apt.title}</h2>
          <p className="mt-2">{apt.address}</p>
          <p className="mt-1 font-bold">{apt.price} EUR</p>
        </div>
      ))}
    </div>
  )
}
