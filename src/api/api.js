export async function apiValue() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302')
    const data = await response.json();
    return data.results;
}