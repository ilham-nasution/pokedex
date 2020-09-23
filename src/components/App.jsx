import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import PokeCardList from "./PokeCardList";
import PokeDetail from "./PokeDetail";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.data.results)
      .then((data) =>
        data.forEach((pokemon) => {
          fetchPokemonData(pokemon.url);
        })
      );
  }, []);

  const fetchPokemonData = (url) => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setPokemons((prevValue) => [...prevValue, data]));
  };

  const handleGetDetail = (pokemon) => {
    setShowModal(true);
    setPokemon(pokemon);
  };

  return (
    <>
      {showModal && (
        <PokeDetail pokemon={pokemon} setShowModal={setShowModal} />
      )}
      <div className="container">
        <h1>Pokedex</h1>
        <img
          src="https://lh3.googleusercontent.com/proxy/m7FsONW6qPijjKm9goxM5sVqDTaeJv8FLVt9rBKw0AfoweHFzoasBhMpOeKHErAQIBOM575GXDoFIcpcWaVj_n91vQx10-qS82YN8Hs3HXubj0i9I4CmtSux4iu8XAbrYA"
          alt="pokedex"
          width="136px"
          height="136px"
          style={{
            position: "fixed",
            right: "-32px",
            top: "-32px",
            transform: "rotate(40deg)",
            opacity: 0.2,
            zIndex: -1,
          }}
        />
        <PokeCardList pokemons={pokemons} handleGetDetail={handleGetDetail} />
      </div>
    </>
  );
};

export default App;
