import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import config from '../assets/js/config';
import Carousel from './Carousel';
import Collapsible from './Collapsible';
import NotFound from './NotFound';
import getDynamicWindowWidth from '../hooks/getDynamicWindowWidth';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/css/Property.css';

const Property = () => {
    const {id} = useParams();
    const [property, setProperty] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const windowWidth = getDynamicWindowWidth();

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await fetch(`${config.base_url}/properties/${id}`);
                if (!response.ok) throw new Error('Property not found');
                const data = await response.json();
                setProperty(data);
                setIsLoading(false);
            } catch (err) {
                setError(err);
                setIsLoading(false);
            }
        };
        fetchProperty();
    }, [id]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <NotFound/>;

    const renderStars = (rating) => {
        const ratingInt = Math.floor(rating);
        return Array.from({length: 5}, (_, i) => (
            <i key={i} className={`fas fa-star ${i < ratingInt ? 'filled' : 'empty'}`}></i>
        ));
    };

    const isMobile = windowWidth <= 768;

    return (
        <div className="property-details">
            <Carousel images={property.pictures}/>

            <div className="property-header">
                <div className="property-title-location">
                    <h1>{property.title}</h1>
                    <p>{property.location}</p>
                </div>
                {isMobile ? (
                    <>
                        <div className="tags">
                            {property.tags.map(tag => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                        <div className="rating-host-container">
                            <div className="star-rating">{renderStars(property.rating)}</div>
                            <div className="host-info">
                                <span>{property.host.name}</span>
                                <img src={property.host.picture} alt="Host"/>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="host-info">
                            <span>{property.host.name}</span>
                            <img src={property.host.picture} alt="Host"/>
                        </div>
                        <div className="tags-rating-container">
                            <div className="tags">
                                {property.tags.map(tag => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                            <div className="star-rating">{renderStars(property.rating)}</div>
                        </div>

                    </>
                )}
            </div>

            <div className="description-equipment-container">
                <Collapsible title="Description">
                    <p>{property.description}</p>
                </Collapsible>
                <Collapsible title="Equipements">
                    <ul>
                        {property.equipments.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </Collapsible>
            </div>
        </div>
    );
};

export default Property;
