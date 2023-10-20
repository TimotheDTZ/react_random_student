import React, { useState } from 'react';
import './header.css';
import Lottery from '../lottery/lottery'
import Absents from '../absents/absents'

function Header() {
    const [activeButton, setActiveButton] = useState('Tirage');
    const [selectedComponent, setSelectedComponent] = useState(<Lottery />);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        if (buttonName === 'Tirage') {
            setSelectedComponent(<Lottery />);
        } else {
            setSelectedComponent(<Absents />);
        }
    };

    return (
        <div className="main-container">
            <header className="header">
                <nav>
                    <button
                        className={`header-button ${activeButton === 'Tirage' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Tirage')}
                    >
                        Tirage au sort
                    </button>
                    <button
                        className={`header-button ${activeButton === 'Absent(e)s' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Absent(e)s')}
                    >
                        Absent(e)s
                    </button>
                </nav>
            </header>
            {selectedComponent}
        </div>
    );
}

export default Header;
