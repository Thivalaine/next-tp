import React from 'react';

export default function FilterType({ setTypeFilter, types }) {
    const uniqueTypes = [...new Set(types)];

    const handleFilterChange = (event) => {
        setTypeFilter(event.target.value);
    };

    return (
        <div>
            <select
                onChange={handleFilterChange}
                style={{
                    padding: '8px',
                    margin: '8px',
                    borderRadius: '30px',
                    border: '1px solid lightgrey',
                    width: '100%',
                }}
            >
                <option value="">Tous les types</option>
                {uniqueTypes.map((type, index) => (
                    <option key={index} value={type}>
                        {type}
                    </option>
                ))}
                </select>
        </div>
    );
};
