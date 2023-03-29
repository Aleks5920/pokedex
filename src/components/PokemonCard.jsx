function PokemonCard({ props }) {
    const pokemon = props;
    return (
        pokemon.imgSrc ? <figure><img src={pokemon.imgSrc} /> <figcaption>{pokemon.name}</figcaption></figure> : <figcaption>{pokemon.name} <p>???</p></figcaption>);
}



export default PokemonCard;