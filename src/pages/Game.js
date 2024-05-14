import React, { useEffect, useState } from 'react';
import { apiValue } from "../api/api";

function Game() {
      const [resultsArray, setResultsArray] = useState([]);

    useEffect(() => {
        async function fetchAndSetData() {
        try {
            const data = await apiValue();
            setResultsArray(data);
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
        }

        fetchAndSetData();
    }, []);

    return(
        <p>Game</p>
    );
}

export default Game;
