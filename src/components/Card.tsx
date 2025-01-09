import React from 'react';
import Link from 'next/link';

export default function Card({ pokemon }) {
    return (
        <Link href={`/pokemon/${pokemon.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div style={{ border: '1px solid lightgrey', borderRadius: '8px', padding: '16px', textAlign: 'center', width: '300px' }}>
                <p style={{ textAlign: 'right', color: '#777' }}>
                    #{pokemon.pokedexId}
                </p>
                <img src={pokemon.image} alt={pokemon.name} style={{ width: '150px', height: '150px' }} />
                <h3>{pokemon.name}</h3>
                <div>
                    {pokemon.types.map((type) => (
                        <img
                            key={type.id}
                            src={type.image}
                            alt={type.name}
                            title={type.name}
                            style={{ width: '40px', height: '40px', margin: '5px' }}
                        />
                    ))}
                </div>
            </div>
        </Link>
    );
};
