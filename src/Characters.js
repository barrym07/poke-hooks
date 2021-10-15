import React, {useState, useEffect } from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Characters() {
    useEffect(() => {
        fetchResults();
    }, []);

    const [results, setResults] = useState ([]);

    const fetchResults = async () => {
        const data = await fetch(
            'https://pokeapi.co/api/v2/pokemon/?limit=10'
        );

        const results = await data.json();
        console.log(results.results);
        setResults(results.results);
        };
 
return (
    <div>
        {results.map(results => (
            <h1>
                <Link to={`/characters/${results.name}`}>{results.name}</Link>
            </h1>
        ))}
    </div>
)
        }


export default Characters;
