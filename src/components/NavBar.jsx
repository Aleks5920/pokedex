function NavBar({ pokemonIndex, setPokemonIndex, PokemonList }) {
    // State
    // Comportement
    const handleClickNext = () => {
        setPokemonIndex(pokemonIndex + 1);
        console.log(pokemonIndex);
    }

    const handleClickPrevious = () => {
        setPokemonIndex(pokemonIndex - 1);
        console.log(pokemonIndex);
    };

    //Affichage
    return (
        <>
            <button onClick={handleClickPrevious}>Precedent</button>
            <button onClick={handleClickNext}>Suivant</button>
        </>
    )
};

export default NavBar;