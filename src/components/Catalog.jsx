import React, { useState } from 'react';
import './index.css';
import Sort from './Sort';
import Filter from './Filter';


const Catalog = () => {
    const [activeTab, setActiveTab] = useState('content-1');
    const products = [
        // data
    ];

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='catalog'>
            <Filter activeTab={activeTab} products={products} />
            <Sort activeTab={activeTab} onTabChange={handleTabChange} />
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {products.map(product => (
                    <li key={product.id} style={{ marginBottom: '10px' }}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Catalog;