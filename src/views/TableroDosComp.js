import React, { useState, useContext, useEffect } from "react";
import styled, { css } from "styled-components";
import tableroUno from "../components/TableroUno";
import { YAxis } from "./EjeVertY";
import { XAxis } from "./EjeHorizX";

import { Context } from "../store/Context";

const ContenedorJugador = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 15rem;
`;

const SeaComp = styled.div`
  box-sizing: border-box;
  background-color: blue;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0px;
  border: 0.5px solid #f0f8ff;

  p {
    view: hidden;
  }

  ${(props) =>
    props.shipRight &&
    css`
      background-color: orange;
    `}

  ${(props) =>
    props.rightShot &&
    css`
      background-color: red;
    `}

    ${(props) =>
    props.missedShot &&
    css`
      background-color: green;
    `}
`;

const EjeVertical = styled.div`
  display: flex;
`;

const EjeHorizontal = styled.div`
  display: flex;
  flex-direction: column;
`;

const CampoDeBatalla = () => {
  const { store } = useContext(Context);
  let [tableroJugador, definirTableroJugador] = useState(tableroUno);

  useEffect(() => {
    let enemyX = store.compTarget[0];
    let enemyY = store.compTarget[1];
    let arregloOrdenado = [...tableroJugador];
    if (store.compTarget.length !== 0 && arregloOrdenado[enemyX][enemyY] === 1) {
      arregloOrdenado[enemyX][enemyY] = 3;
      definirTableroJugador(arregloOrdenado);
    } else if (
      store.compTarget.length !== 0 &&
      arregloOrdenado[enemyX][enemyY] === 0
    ) {
      arregloOrdenado[enemyX][enemyY] = 2;
      definirTableroJugador(arregloOrdenado);
    }
  }, [tableroJugador, store.compTarget]);

  return (
    <>
      <EjeHorizontal>
        <XAxis></XAxis>
        <EjeVertical>
          <YAxis></YAxis>
          <ContenedorJugador>
            {tableroJugador[0].map((ele, key) => {
              return (
                <SeaComp
                  key={key}
                  shipRight={ele === 1 ? true : false}
                  missedShot={ele === 2 ? true : false}
                  rightShot={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </SeaComp>
              );
            })}
            {tableroJugador[1].map((ele, key) => {
              return (
                <SeaComp
                  key={key}
                  shipRight={ele === 1 ? true : false}
                  missedShot={ele === 2 ? true : false}
                  rightShot={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </SeaComp>
              );
            })}
            {tableroUno[2].map((ele, key) => {
              return (
                <SeaComp
                  key={key}
                  shipRight={ele === 1 ? true : false}
                  missedShot={ele === 2 ? true : false}
                  rightShot={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </SeaComp>
              );
            })}
            {tableroUno[3].map((ele, key) => {
              return (
                <SeaComp
                  key={key}
                  shipRight={ele === 1 ? true : false}
                  missedShot={ele === 2 ? true : false}
                  rightShot={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </SeaComp>
              );
            })}
            {tableroJugador[4].map((ele, key) => {
              return (
                <SeaComp
                  key={key}
                  shipRight={ele === 1 ? true : false}
                  missedShot={ele === 2 ? true : false}
                  rightShot={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </SeaComp>
              );
            })}
            {tableroJugador[5].map((ele, key) => {
              return (
                <SeaComp
                  key={key}
                  shipRight={ele === 1 ? true : false}
                  missedShot={ele === 2 ? true : false}
                  rightShot={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </SeaComp>
              );
            })}
            {tableroJugador[6].map((ele, key) => {
              return (
                <SeaComp
                  key={key}
                  shipRight={ele === 1 ? true : false}
                  missedShot={ele === 2 ? true : false}
                  rightShot={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </SeaComp>
              );
            })}
            {tableroJugador[7].map((ele, key) => {
              return (
                <SeaComp
                  key={key}
                  shipRight={ele === 1 ? true : false}
                  missedShot={ele === 2 ? true : false}
                  rightShot={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </SeaComp>
              );
            })}
            {tableroJugador[8].map((ele, key) => {
              return (
                <SeaComp
                  key={key}
                  shipRight={ele === 1 ? true : false}
                  missedShot={ele === 2 ? true : false}
                  rightShot={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </SeaComp>
              );
            })}
            {tableroJugador[9].map((ele, key) => {
              return (
                <SeaComp
                  key={key}
                  shipRight={ele === 1 ? true : false}
                  missedShot={ele === 2 ? true : false}
                  rightShot={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </SeaComp>
              );
            })}
            <div>Jugador</div>
          </ContenedorJugador>
        
        </EjeVertical>
      </EjeHorizontal>
    </>
  );
};

export default CampoDeBatalla;
