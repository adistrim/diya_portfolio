import React from 'react';

const GreenButton = ({ content, onClick, href }) => {
    const handleClick = () => {
        if (href) {
            window.open(href, '_blank');
        } else if (onClick) {
            onClick();
        }
    };

    return (
        <button
            className="py-2 px-4 bg-[#68B3A3] text-white rounded hover:bg-[#68B3A3] hover:opacity-80"
            onClick={handleClick}
        >
            {content}
        </button>
    );
};

export default GreenButton;

// Usage:
// import GreenButton from './greenButton';
{/* <GreenButton content="Contact" onClick={funcName} /> */ }
{/* <GreenButton content="Visit Us" href="webAddress" /> */ }
