import React from 'react';

const Footer = () => {
    return (
        <div className="bg-base-200 py-6 text-center text-sm">
            © {new Date().getFullYear()} TripNexus. All rights reserved.
        </div>
    );
};

export default Footer;