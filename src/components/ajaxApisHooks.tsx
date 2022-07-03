import React, { useState, useEffect } from "react";

interface IDataPokemon {
  id: number;
  avatar: string;
  name: string;
}

function Pokemon({ avatar, name }: IDataPokemon): JSX.Element {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default function AjaxApisHooks(): JSX.Element {
  const [pokemon, setPokemon] = useState<IDataPokemon[]>([]);

  useEffect(() => {
    const getPokemon = async (url: string) => {
      let res = await fetch(url),
        json = await res.json();

      json.results.forEach(async (e: any) => {
        let res = await fetch(e.url),
          json = await res.json();

        let pokemon: IDataPokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };

        setPokemon((pokemons) => [...pokemons, pokemon]);
      });
    };
    getPokemon("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  return (
    <>
      <h3>Peticiones Asincronas en Hooks</h3>
      {pokemon.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemon.map((el) => (
          <Pokemon key={el.id} avatar={el.avatar} name={el.name} id={el.id} />
        ))
      )}
    </>
  );
}
