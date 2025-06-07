import React, { useEffect, useState } from 'react';
import { fetchCleaningOrders, createCleaningOrder } from '../services/api';
export default function Cleaning() {
  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState({ name:'', phone:'', address:'', comment:'' });
  const [status, setStatus] = useState('');
  useEffect(() => { fetchCleaningOrders().then(setOrders); }, []);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    try { await createCleaningOrder(form); setStatus('Booked!'); }
    catch { setStatus('Error'); }
  };
  return (
    <div>
      <h1>Cleaning Services</h1>
      {status && <p>{status}</p>}
      <form onSubmit={handleSubmit} className="form">
        <input name="name" onChange={handleChange} className="form-field" placeholder="Name" required />
        <input name="phone" onChange={handleChange} className="form-field" placeholder="Phone" required />
        <input name="address" onChange={handleChange} className="form-field" placeholder="Address" />
        <textarea name="comment" onChange={handleChange} className="form-field" placeholder="Comment" />
        <button type="submit" className="btn-primary">Order Cleaning</button>
      </form>
      <h2>Your Cleaning Orders</h2>
      <ul>
        {orders.map(o => <li key={o.id}>#{o.id} — {o.status}</li>)}
      </ul>
    </div>
  );
}