import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchApartmentById } from '../services/api';
import ContactForm from '../components/ContactForm';

const url = "https://79cf-217-31-72-114.ngrok-free.app"
export default function ApartmentDetail() {
  const { id } = useParams();
  const [apt, setApt] = useState(null);

  useEffect(() => {
    fetchApartmentById(id).then(setApt);
  }, [id]);

  if (!apt) return <p>Loading...</p>;

  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>{apt.title}</h1>
      {apt.files.map(f => (
        <img
          key={f.id}
          src={url + f.file_path}
          alt={apt.title}
          className="apartment-detail-img"
        />
      ))}
      <p><strong>Address:</strong> {apt.address}</p>
      <p><strong>Price:</strong> {apt.price} EUR</p>
      <ContactForm aptId={apt.id} />
    </div>
  );
}
