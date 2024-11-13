import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import config from '../assets/js/config';
import '../assets/css/Properties.css';

function fetchProperties() {
  return fetch(`${config.base_url}/properties`);
}

function Properties() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['properties'],
    queryFn: async () => {
      const res = await fetchProperties();
      if (!res.ok) {
        throw new Error('Failed to fetch');
      }
      return res.json();
    },
  });

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error.message}</p>;

  return (
    <div className="properties-container">
      {data.map((property) => (
        <div key={property.id} className="property-card">
          <Link to={`/location/${property.id}`}>
            <img src={property.cover} alt={property.title} className="property-image" />
            <div className="property-info">
              <h3>{property.title}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Properties;