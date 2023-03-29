import PropTypes from "prop-types";

function PokemonCard({ props }) {
    const pokemon = props;

    return (
        pokemon.imgSrc ? <figure><img src={pokemon.imgSrc} /> <figcaption>{pokemon.name}</figcaption></figure> : <figcaption>{pokemon.name} <p>???</p></figcaption>);
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.img,
    })
}



export default PokemonCard;