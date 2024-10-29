import { useEffect, useState } from "react";
type Pokemon = {
  name: string;
  type: string;
};

const Pokemon = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const getPokemonData = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/").then(
      (res) => res.json()
    );
    const data = response.results;
    setPokemons(data);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <div>
      <h3>Pokemon List</h3>
      <ul>
        {pokemons.map((pokemon) => {
          return <li>{pokemon.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Pokemon;
