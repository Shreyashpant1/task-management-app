import React from "react";
const Footer = () => {
    return (
        <footer className="text-center p-4 bg-gray-300 text-gray-600">
            {new Date().getFullYear()} Task Manager © All rights reserved.
        </footer>
    );
};
export default Footer;