function PokemonCard() {
    const pokemon = pokemonList[0];
    return (
        pokemon.imgSrc ? <figure><img src={pokemon.imgSrc} /> <figcaption>Bulbizar</figcaption></figure> : <p>???</p>
    );
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