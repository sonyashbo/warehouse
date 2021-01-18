import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link } from 'react-router-dom';
const Header = () => (
    <header className="bg-gray-100 p-6">
        <div className="flex items-center justify-between flex-wrap">
            <div className="block">
                <Link to="/"><span className="font-semibold text-xl tracking-tight text-gray-800">Warehouse app</span></Link>
            </div>
            <nav className="block">
                <Link to="/gloves"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">Gloves</span></Link>
                <Link to="/facemasks"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">Facemasks</span></Link>
                <Link to="/beanies"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">Beanies</span></Link>
            </nav>
        </div>
    </header>
);
export default Header;