function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
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

    if (pokemonList[pokemonIndex].name === "pikachu")
        alert('pika pika!');

    //Affichage
    return (
        <>
            <button onClick={handleClickPrevious}>Precedent</button>
            <button onClick={handleClickNext}>Suivant</button>
        </>
    )
};

export default NavBar;