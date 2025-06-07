/* src/components/ContactForm.jsx */
import { useState } from 'react';
import { submitContact } from '../services/api';

export default function ContactForm({ aptId }) {
  const [form, setForm] = useState({ apartment_id: aptId, client_name: '', phone: '', client_wishes: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await submitContact(form);
      setStatus('Sent! We will contact you soon.');
    } catch (error) {
      console.error('Contact form submission error:', error);
      setStatus('Error sending request.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        name="client_name"
        value={form.client_name}
        onChange={handleChange}
        required
        placeholder="Your Name"
        className="form-field"
      />
      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        required
        placeholder="Phone Number"
        className="form-field"
      />
      <textarea
        name="client_wishes"
        value={form.client_wishes}
        onChange={handleChange}
        placeholder="Comments or questions"
        className="form-field"
      />
      <button type="submit" className="btn-primary">Contact Realtor</button>
      {status && <p style={{ marginTop: '16px', color: '#28a745' }}>{status}</p>}
    </form>
  );
}
