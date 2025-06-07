// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { fetchApartments } from '../services/api';
import ApartmentCard from '../components/ApartmentCard';

export default function Home() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetchApartments().then(setApartments);
  }, []);

  return (
    <div className="grid">
      {apartments.map(apt => (
        <ApartmentCard key={apt.id} apt={apt} />
      ))}
    </div>
  );
}

