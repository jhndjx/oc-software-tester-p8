import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import config from '../assets/js/config';
import '../assets/css/Properties.css';

function fetchProperties() {
    return fetch(`${config.base_url}/properties`).then((res) => {
        if (!res.ok) {
            throw new Error('Failed to fetch');
        }
        return res.json();
    });
}

function Properties() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProperties()
            .then((properties) => {
                setData(properties);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <p>Chargement...</p>;
    if (error) return <p>Erreur: {error.message}</p>;

    return (
        <div className="properties-container">
            {data.map((property) => (
                <PropertyCard key={property.id} property={property}/>
            ))}
        </div>
    );
}

function PropertyCard({property}) {
    return (
        <div className="property-card">
            <Link to={`/location/${property.id}`}>
                <img src={property.cover} alt={property.title} className="property-image"/>
                <div className="property-info">
                    <h3>{property.title}</h3>
                </div>
            </Link>
        </div>
    );
}

export default Properties;
