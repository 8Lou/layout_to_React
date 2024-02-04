
import React from 'react';

const Filter = ({ activeTab, products }) => {

    const filteredProducts = products.filter(product => {
        // логику фильтрации
        return true; // условие для фильтрации / сортировки
    });

    return (
        <div>
            <h2 className='choose__title'>Choose your car</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {filteredProducts.map(product => (
                    <li key={product.id} style={{ marginBottom: '10px' }}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Filter;