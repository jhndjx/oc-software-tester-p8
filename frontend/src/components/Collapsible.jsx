import React, {useState} from 'react';
import '../assets/css/Collapsible.css';

const Collapsible = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapsible = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapsible ${isOpen ? 'open' : ''}`}>
            <div className="collapsible-header" onClick={toggleCollapsible}>
                <span>{title}</span>
                <i className={`fas ${isOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`}/>
            </div>
            {isOpen && (
                <div className="collapsible-content">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Collapsible;
