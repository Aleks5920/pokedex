function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {

    const handleClick = (pokebtn) => {
        switch (pokebtn.name) {
            case 'Bulbizar':
                pokemonIndex = 0;
                setPokemonIndex(pokemonIndex);
                console.log(pokebtn.name);
                console.log(pokemonIndex);
                break;
            case 'charmander':
                pokemonIndex = 1;
                setPokemonIndex(pokemonIndex);
                console.log(pokebtn.name);
                console.log(pokemonIndex);

                break;
            case 'squirtle':
                pokemonIndex = 2;
                setPokemonIndex(pokemonIndex);
                console.log(pokebtn.name);
                console.log(pokemonIndex);
                break;
            case 'pikachu':
                pokemonIndex = 3;
                setPokemonIndex(pokemonIndex);
                console.log(pokebtn.name);
                console.log(pokemonIndex);
                break;
            case 'mew':
                pokemonIndex = 4;
                setPokemonIndex(pokemonIndex);
                console.log(pokebtn.name);
                console.log(pokemonIndex);
                break;
        }
    }


    return (
        <div>
            {pokemonList.map((pokebtn) => (
                <button key={pokemonList.name} onClick={() => handleClick(pokebtn)}>
                    {pokebtn.name}
                </button>
            ))
            }
        </div >
    )
};

export default NavBar;