import React, { useState, useContext, useEffect } from "react";
import styled, { css } from "styled-components";
import tableroUno from "../components/TableroUno";
import { YAxis } from "./EjeVertY";
import { XAxis } from "./EjeHorizX";

import { Context } from "../store/Context";

const PlayerGridsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 15rem;
`;

const GridSqrSea = styled.div`
  box-sizing: border-box;
  background-color: blue;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0px;
  border: 0.5px solid #f0f8ff;

  p {
    visibility: hidden;
  }

  ${(props) =>
    props.isaShip &&
    css`
      background-color: orange;
    `}

  ${(props) =>
    props.isHit &&
    css`
      background-color: red;
    `}

    ${(props) =>
    props.wasMissed &&
    css`
      background-color: green;
    `}
`;

const BattleGridsContainerGridY = styled.div`
  display: flex;
`;

const BattleGridsContainerGridX = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlayerBattleGrid = () => {
  const { store } = useContext(Context);
  let [playerArr, setPlayerArr] = useState(tableroUno);

  useEffect(() => {
    let enemyX = store.compTarget[0];
    let enemyY = store.compTarget[1];
    let displayedArr = [...playerArr];
    if (store.compTarget.length !== 0 && displayedArr[enemyX][enemyY] === 1) {
      displayedArr[enemyX][enemyY] = 3;
      setPlayerArr(displayedArr);
      console.log("enemy hit, sorry");
    } else if (
      store.compTarget.length !== 0 &&
      displayedArr[enemyX][enemyY] === 0
    ) {
      displayedArr[enemyX][enemyY] = 2;
      setPlayerArr(displayedArr);
    }
  }, [playerArr, store.compTarget]);

  return (
    <>
      <BattleGridsContainerGridX>
        <XAxis></XAxis>
        <BattleGridsContainerGridY>
          <YAxis></YAxis>
          <PlayerGridsContainer>
            {playerArr[0].map((ele, key) => {
              return (
                <GridSqrSea
                  key={key}
                  isaShip={ele === 1 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                  isHit={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {playerArr[1].map((ele, key) => {
              return (
                <GridSqrSea
                  key={key}
                  isaShip={ele === 1 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                  isHit={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {tableroUno[2].map((ele, key) => {
              return (
                <GridSqrSea
                  key={key}
                  isaShip={ele === 1 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                  isHit={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {tableroUno[3].map((ele, key) => {
              return (
                <GridSqrSea
                  key={key}
                  isaShip={ele === 1 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                  isHit={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {playerArr[4].map((ele, key) => {
              return (
                <GridSqrSea
                  key={key}
                  isaShip={ele === 1 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                  isHit={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {playerArr[5].map((ele, key) => {
              return (
                <GridSqrSea
                  key={key}
                  isaShip={ele === 1 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                  isHit={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {playerArr[6].map((ele, key) => {
              return (
                <GridSqrSea
                  key={key}
                  isaShip={ele === 1 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                  isHit={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {playerArr[7].map((ele, key) => {
              return (
                <GridSqrSea
                  key={key}
                  isaShip={ele === 1 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                  isHit={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {playerArr[8].map((ele, key) => {
              return (
                <GridSqrSea
                  key={key}
                  isaShip={ele === 1 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                  isHit={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {playerArr[9].map((ele, key) => {
              return (
                <GridSqrSea
                  key={key}
                  isaShip={ele === 1 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                  isHit={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            <div>Jugador</div>
          </PlayerGridsContainer>
        
        </BattleGridsContainerGridY>
      </BattleGridsContainerGridX>
    </>
  );
};

export default PlayerBattleGrid;
