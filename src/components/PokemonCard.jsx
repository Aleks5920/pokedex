import PropTypes from "prop-types";

function PokemonCard({ props }) {
    const pokemon = props;

    return (
        pokemon.imgSrc ? <figure><img src={pokemon.imgSrc} /><p>{pokemon.name}</p></figure> : <figcaption>{pokemon.name}<p>???</p></figcaption>);

}

// PokemonCard.propTypes = {
//    pokemon: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       imgSrc: PropTypes.string,
//  }).isRequired
//}



export default PokemonCard;