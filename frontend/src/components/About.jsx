import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import config from '../assets/js/config';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/css/About.css';

function About() {
  const [isReliabilityOpen, setReliabilityOpen] = useState(false);
  const [isRespectOpen, setRespectOpen] = useState(false);
  const [isServiceOpen, setServiceOpen] = useState(false);
  const [isSecurityOpen, setSecurityOpen] = useState(false);

  const toggleReliability = () => setReliabilityOpen(!isReliabilityOpen);
  const toggleRespect = () => setRespectOpen(!isRespectOpen);
  const toggleService = () => setServiceOpen(!isServiceOpen);
  const toggleSecurity = () => setSecurityOpen(!isSecurityOpen);

  return (
    <div className="about-details">
      
      <div className="about-container">

        <div className="reliability">
          <div className={`collapsible ${isReliabilityOpen ? 'open' : ''}`}>
            <div className="collapsible-header" onClick={toggleReliability}>
              <span>Fiabilité</span>
              <i className={`fas ${isReliabilityOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`} />
            </div>
            <div className="collapsible-content">
              <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et
              toutes les informations sont régulièrement vérifiées par nos équipes.
              </p>
            </div>
          </div>
        </div>

        <div className="respect">
          <div className={`collapsible ${isRespectOpen ? 'open' : ''}`}>
            <div className="collapsible-header" onClick={toggleRespect}>
              <span>Respect</span>
              <i className={`fas ${isRespectOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`} />
            </div>
            <div className="collapsible-content">
              <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>
          </div>
        </div>

        <div className="service">
          <div className={`collapsible ${isServiceOpen ? 'open' : ''}`}>
            <div className="collapsible-header" onClick={toggleService}>
              <span>Service</span>
              <i className={`fas ${isServiceOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`} />
            </div>
            <div className="collapsible-content">
              <p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction,
              que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
              </p>
            </div>
          </div>
        </div>

        <div className="security">
          <div className={`collapsible ${isSecurityOpen ? 'open' : ''}`}>
            <div className="collapsible-header" onClick={toggleSecurity}>
              <span>Sécurité</span>
              <i className={`fas ${isSecurityOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`} />
            </div>
            <div className="collapsible-content">
              <p>La sécurité et les priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
              </p>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default About;
