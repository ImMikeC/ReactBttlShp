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
    let enemyX = store.objetivoComp[0];
    let enemyY = store.objetivoComp[1];
    let arregloOrdenado = [...tableroJugador];
    if (store.objetivoComp.length !== 0 && arregloOrdenado[enemyX][enemyY] === 1) {
      arregloOrdenado[enemyX][enemyY] = 3;
      definirTableroJugador(arregloOrdenado);
    } else if (
      store.objetivoComp.length !== 0 &&
      arregloOrdenado[enemyX][enemyY] === 0
    ) {
      arregloOrdenado[enemyX][enemyY] = 2;
      definirTableroJugador(arregloOrdenado);
    }
  }, [tableroJugador, store.objetivoComp]);

  return (
    <>
      <EjeHorizontal>
        <XAxis></XAxis>
        <EjeVertical>
          <YAxis></YAxis>
          <ContenedorJugador>
            {tableroJugador[0].map((sim, key) => {
              return (
                <SeaComp
                  key={key}
                  shipRight={sim === 1 ? true : false}
                  missedShot={sim === 2 ? true : false}
                  rightShot={sim === 3 ? true : false}
                >
                  <p>{sim}</p>
                </SeaComp>
              );
            })}
            {tableroJugador[1].map((sim, key) => {
              return (
                <SeaComp
                  key={key}
                  shipRight={sim === 1 ? true : false}
                  missedShot={sim === 2 ? true : false}
                  rightShot={sim === 3 ? true : false}
                >
                  <p>{sim}</p>
                </SeaComp>
              );
            })}
            {tableroUno[2].map((sim, key) => {
              return (
                <SeaComp
                  key={key}
                  shipRight={sim === 1 ? true : false}
                  missedShot={sim === 2 ? true : false}
                  rightShot={sim === 3 ? true : false}
                >
                  <p>{sim}</p>
                </SeaComp>
              );
            })}
            {tableroUno[3].map((sim, key) => {
              return (
                <SeaComp
                  key={key}
                  shipRight={sim === 1 ? true : false}
                  missedShot={sim === 2 ? true : false}
                  rightShot={sim === 3 ? true : false}
                >
                  <p>{sim}</p>
                </SeaComp>
              );
            })}
            {tableroJugador[4].map((sim, key) => {
              return (
                <SeaComp
                  key={key}
                  shipRight={sim === 1 ? true : false}
                  missedShot={sim === 2 ? true : false}
                  rightShot={sim === 3 ? true : false}
                >
                  <p>{sim}</p>
                </SeaComp>
              );
            })}
            {tableroJugador[5].map((sim, key) => {
              return (
                <SeaComp
                  key={key}
                  shipRight={sim === 1 ? true : false}
                  missedShot={sim === 2 ? true : false}
                  rightShot={sim === 3 ? true : false}
                >
                  <p>{sim}</p>
                </SeaComp>
              );
            })}
            {tableroJugador[6].map((sim, key) => {
              return (
                <SeaComp
                  key={key}
                  shipRight={sim === 1 ? true : false}
                  missedShot={sim === 2 ? true : false}
                  rightShot={sim === 3 ? true : false}
                >
                  <p>{sim}</p>
                </SeaComp>
              );
            })}
            {tableroJugador[7].map((sim, key) => {
              return (
                <SeaComp
                  key={key}
                  shipRight={sim === 1 ? true : false}
                  missedShot={sim === 2 ? true : false}
                  rightShot={sim === 3 ? true : false}
                >
                  <p>{sim}</p>
                </SeaComp>
              );
            })}
            {tableroJugador[8].map((sim, key) => {
              return (
                <SeaComp
                  key={key}
                  shipRight={sim === 1 ? true : false}
                  missedShot={sim === 2 ? true : false}
                  rightShot={sim === 3 ? true : false}
                >
                  <p>{sim}</p>
                </SeaComp>
              );
            })}
            {tableroJugador[9].map((sim, key) => {
              return (
                <SeaComp
                  key={key}
                  shipRight={sim === 1 ? true : false}
                  missedShot={sim === 2 ? true : false}
                  rightShot={sim === 3 ? true : false}
                >
                  <p>{sim}</p>
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
