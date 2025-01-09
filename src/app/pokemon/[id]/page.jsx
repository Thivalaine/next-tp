import React from 'react';
import Link from 'next/link';

export default async function DetailPage({ params }) {
    const { id } = params;

    const response = await fetch(`https://nestjs-pokedex-api.vercel.app/pokemons/${id}`);
    const pokemon = await response.json();

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ marginBottom: '20px' }}>
                <Link href={`/`} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', backgroundColor: 'red', padding: '10px 20px', borderRadius: '5px' }}>
                    ← Retour
                </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '20px' }}>
                <div>
                    <img
                        src={pokemon.image}
                        alt={pokemon.name}
                        style={{ width: '200px', height: '200px', objectFit: 'contain', borderRadius: '8px' }}
                    />
                </div>

                <div style={{ flex: 1 }}>
                    <h1 style={{ margin: '0 0 10px 0' }}>{pokemon.name}</h1>
                    <div style={{ marginBottom: '20px' }}>
                        <h3>Types</h3>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {pokemon.types.map((type) => (
                                <div
                                    key={type.id}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                    }}
                                >
                                    <img
                                        src={type.image}
                                        alt={type.name}
                                        title={type.name}
                                        style={{ width: '50px', height: '50px' }}
                                    />
                                    <p style={{ margin: 0 }}>{type.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3>Statistiques</h3>
                        <table
                            style={{
                                borderCollapse: 'collapse',
                                width: '100%',
                                textAlign: 'left',
                                border: '1px solid #ddd',
                            }}
                        >
                            <thead>
                                <tr>
                                    <th style={{ borderBottom: '2px solid #ddd', padding: '8px' }}>Stat</th>
                                    <th style={{ borderBottom: '2px solid #ddd', padding: '8px' }}>Valeur</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(pokemon.stats).map(([key, value]) => (
                                    <tr key={key}>
                                        <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{key}</td>
                                        <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '40px' }}>
                <h3>Évolution(s) :</h3>
                {pokemon.evolutions.length > 0 ? (
                    <div style={{ display: 'flex', gap: '20px' }}>
                        {pokemon.evolutions.map((evolution) => (
                            <div
                                key={evolution.pokedexId}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                }}
                            >
                                <p>{evolution.name}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Ce Pokémon n'a pas d'évolution.</p>
                )}
            </div>
        </div>
    );
}
