import React, { useState } from "react";

const PokeDetail = ({ pokemon, setShowModal }) => {
  const [tabs, setTabs] = useState("stats");
  let modal;

  switch (pokemon.types[0].type.name) {
    case "grass":
    case "bug":
      modal = "modal-green";
      break;

    case "fire":
      modal = "modal-red";
      break;

    case "water":
      modal = "modal-blue";
      break;

    case "normal":
      modal = "modal-gray";
      break;

    default:
      modal = "modal";
      break;
  }

  const renderSwitch = (tabs) => {
    switch (tabs) {
      case "stats":
        return (
          <div className="stats">
            {pokemon.stats.map((stat, index) => (
              <div key={index} className="row">
                <p>{stat.stat.name}</p>
                <p>{stat.base_stat}</p>
                <div
                  style={{
                    backgroundColor: "lightgray",
                    width: 100,
                    height: 10,
                    borderRadius: "4px",
                  }}
                >
                  <div
                    style={{
                      height: 10,
                      width: stat.base_stat,
                      backgroundColor: "#001b00",
                      borderRadius: "4px",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        );

      case "moves":
        return (
          <div className="moves">
            {pokemon.moves.map((move, index) => (
              <p key={index} className="btn-move">
                {move.move.name}
              </p>
            ))}
          </div>
        );

      default:
        console.log("Can't find case");
    }
  };

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className={modal}>
      <button className="modal-btn-close" onClick={() => setShowModal(false)}>
        <i className="fas fa-long-arrow-alt-left"></i>
      </button>
      <div className="modal-content-top">
        <h1>{capitalize(pokemon.name)}</h1>
        {pokemon.types.map((type) => (
          <button key={type.slot} className="btn-type">
            {type.type.name}
          </button>
        ))}
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt="pokemon"
        />
      </div>
      <div className="modal-content-bottom">
        <div className="modal-content-tabs">
          <p
            onClick={() => setTabs("stats")}
            className={tabs === "stats" ? "active" : undefined}
          >
            Stats
          </p>
          <p
            onClick={() => setTabs("moves")}
            className={tabs === "moves" ? "active" : undefined}
          >
            Moves
          </p>
        </div>
        {renderSwitch(tabs)}
      </div>
    </div>
  );
};

export default PokeDetail;
