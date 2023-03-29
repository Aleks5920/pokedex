import PokemonCard from "./components/PokemonCard";
import styles from "./App.css";


function App() {
  return (
    <PokemonCard props={pokemonList[0]} />
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

export default App