import PokemonCard from "./components/PokemonCard";
import styles from "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";


function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  return (
    <>
      <div>
        <PokemonCard props={pokemonList[pokemonIndex]} />
        <NavBar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} PokemonList={pokemonList} />
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