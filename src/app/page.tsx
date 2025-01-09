"use client";

import React, { useEffect, useState } from 'react';
import List from '../components/List';
import Bar from '../components/Bar';
import FilterType from '../components/FilterType';
import FilterLimit from '../components/FilterLimit';

export default function HomePage() {
    const [pokemons, setPokemons] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [limitFilter, setLimitFilter] = useState(50);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
            const response = await fetch(`https://nestjs-pokedex-api.vercel.app/pokemons?limit=${limitFilter}`);
                const data = await response.json();
                
                setPokemons(data);
            } catch (error) {
                console.error('Erreur lors de la récup des pokémons :', error);
            }
        };

        fetchPokemons();
    }, [limitFilter]);

    const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).filter(
        (pokemon) => !typeFilter || pokemon.types.some((type) => type.name === typeFilter)
    );

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                gap: '16px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '20px', 
                    background: 'red'
                }}  
            >
                <h1
                    style={{
                        color: 'white',
                        fontSize: '2rem',
                        fontWeight: 'bold',
                    }}
                >
                    Pokédex
                </h1>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '16px',
                        width: '100%',
                    }}
                >
                    <Bar setSearchQuery={setSearchQuery} />
                    <FilterType setTypeFilter={setTypeFilter} types={pokemons.flatMap((pokemon) => pokemon.types.map((type) => type.name))} />
                    <FilterLimit setLimitFilter={setLimitFilter} />
                </div>
            </div>
            <List pokemons={filteredPokemons} />
        </div>
    );
}
