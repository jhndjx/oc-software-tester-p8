import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import config from '../assets/js/config';
import Carousel from './Carousel';
import NotFound from './NotFound';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/css/Property.css';

const fetchProperty = async (id) => {
  const response = await fetch(`${config.base_url}/properties/${id}`);
  if (!response.ok) {
      throw new Error('Property not found');
  }
  return response.json();
};

function Property() {
  const { id } = useParams();
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setEquipmentsOpen] = useState(false);

  const toggleDescription = () => setDescriptionOpen(!isDescriptionOpen);
  const toggleEquipments = () => setEquipmentsOpen(!isEquipmentsOpen);

  const { data: property, error, isLoading } = useQuery({
    queryKey: ["property", id],
    queryFn: async () => fetchProperty(id),
    retry: false
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    return <NotFound />;
  }

  const renderStars = (rating) => {
    const ratingInt = Math.floor(rating);
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= ratingInt) {
        stars.push(<i key={i} className="fas fa-star filled"></i>);
      } else {
        stars.push(<i key={i} className="fas fa-star empty"></i>);
      }
    }
    return stars;
  };

  return (
    <div className="property-details">
      <Carousel images={property.pictures} />
      <div className="property-header">
        <div className="property-title-location">
          <h1>{property.title}</h1>
          <p>{property.location}</p>
        </div>
        <div className="host-info">
          <span>{property.host.name}</span>
          <img src={property.host.picture} alt="Host" />
        </div>
      </div>

      <div className="tags-rating-container">
        <div className="tags">
          {property.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="star-rating">{renderStars(property.rating)}</div>
      </div>

      <div className="description-equipment-container">
        <div className="description">
          <div className={`collapsible ${isDescriptionOpen ? 'open' : ''}`}>
            <div className="collapsible-header" onClick={toggleDescription}>
              <span>Description</span>
              <i className={`fas ${isDescriptionOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`} />
            </div>
            <div className="collapsible-content">
              <p>{property.description}</p>
            </div>
          </div>
        </div>

        <div className="equipments">
          <div className={`collapsible ${isEquipmentsOpen ? 'open' : ''}`}>
            <div className="collapsible-header" onClick={toggleEquipments}>
              <span>Equipements</span>
              <i className={`fas ${isEquipmentsOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`} />
            </div>
            <div className="collapsible-content">
              <ul>
                {property.equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
