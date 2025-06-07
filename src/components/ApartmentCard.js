// e.g. src/components/ApartmentCard.jsx
import { Link } from 'react-router-dom';


export default function ApartmentCard({ apt }) {
  const img = apt.files?.[0]?.file_path;
  return (
    <Link to={`/apartments/${apt.id}`} className="block bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
      {img && <img src={img} alt={apt.title} className="w-full h-48 object-cover" style={{ width: '333px', height: '250px' }}/>}
      <div className="p-4">
        <h2 className="text-xl font-semibold">{apt.title}</h2>
        <p className="mt-2 text-gray-600">{apt.address}</p>
        <p className="mt-1 text-gray-800 font-bold">{apt.price} EUR</p>
      </div>
    </Link>
  );
}
