function PokemonCard() {
    const pokemon = pokemonList[0];
    return (
        pokemon.imgSrc ? <figure><img src={pokemon.imgSrc} /> <figcaption>{pokemon.name}</figcaption></figure> : <figcaption>{pokemon.name} <p>???</p></figcaption>);
}

const pokemonList = [
    {
        name: "Bulbizar",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "Mew",
    }
];



export default PokemonCard;