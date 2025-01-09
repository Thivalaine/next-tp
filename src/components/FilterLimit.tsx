import React from 'react';

export default function FilterLimit({ setLimitFilter }) {
    const handleFilterChange = (event) => {
        setLimitFilter(Number(event.target.value));
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
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50" selected>50</option>
                <option value="100">100</option>
            </select>
        </div>
    );
}
