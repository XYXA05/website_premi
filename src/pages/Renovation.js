import React, { useEffect, useState } from 'react';
import { fetchRenovationProjects, createRenovationOrder } from '../services/api';
export default function Renovation() {
  const [items, setItems] = useState([]);
  useEffect(() => { fetchRenovationProjects().then(setItems); }, []);
  return (
    <div>
      <h1>Renovation Services</h1>
      <ul>
        {items.map(r => (
          <li key={r.id}>{r.address} — Type: {r.renovation_type}</li>
        ))}
      </ul>
    </div>
  );
}
