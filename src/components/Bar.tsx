import React from 'react';

export default function Bar({ setSearchQuery }) {
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

  return (
        <div>
            <input
                type="text"
                placeholder="Rechercher un pokémon"
                onChange={handleSearch}
                style={{
                    padding: '8px',
                    margin: '8px',
                    borderRadius: '30px',
                    border: '1px solid #ccc',
                    width: '500px',
                }}
            />
        </div>
    );
};
