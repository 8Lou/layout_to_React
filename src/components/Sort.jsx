import React from 'react';

const Sort = ({ activeTab, onTabChange }) => {
    const tabs = [
        { id: 1, label: 'Car and Minivan', content: 'content-1' },
        { id: 2, label: 'Trucks', content: 'content-2' },
        { id: 3, label: 'Crossovers & SUVs', content: 'content-3' },
        { id: 4, label: 'Electrified', content: 'content-4' },
    ];

    return (
        <div className="tabs__btn">
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    className={`tabs__btn-item ${activeTab === tab.content && 'tabs__btn-item--active'}`}
                    onClick={() => onTabChange(tab.content)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default Sort;