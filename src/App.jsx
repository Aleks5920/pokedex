import PokemonCard from "./components/PokemonCard";
import styles from "./App.css";
import { useState } from "react";


function App() {
  // State
  const [pokemonIndex, setPokemonIndex] = useState(0);
  // Comportement
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1)
  };
  console.log(pokemonIndex)


  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1)
  };
  console.log(pokemonIndex)
  //Affichage
  return (
    <>
      <div>
        <PokemonCard props={pokemonList[pokemonIndex]} />
        <button onClick={handleClickPrevious}>Precedent</button>
        <button onClick={handleClickNext}>Suivant</button>
      </div>
    </>
  );
}

const pokemonList = [
  {
    name: "Bulbizar",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "Mew",
  }
];

export default App