import React from 'react';
import Card from './Card';

export default function List({ pokemons }) {
    return (
        <div          
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                gap: '16px',
            }}
        >
            {pokemons.map((pokemon) => (
                <Card key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
};
