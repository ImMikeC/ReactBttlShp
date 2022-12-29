import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";
import tableroDos from "../components/TableroDos";
import { YAxis } from "./EjeVertY";

import { Context } from "../store/Context";
import { XAxis } from "./EjeHorizX";

const PanelCompPlayer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 15rem;
`;

const SeaPlayer = styled.div`
  box-sizing: border-box;
  background-color: darkblue;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0px;
  border: 0.5px solid #f0f8ff;
  p {
    view: hidden;
  }

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
    ${(props) =>
    props.isSsimcted &&
    css`
      background-color: orange;
    `}
`;

const PanelY = styled.div`
  display: flex;
`;

const PanelX = styled.div`
  display: flex;
  flex-direction: column;
`;

const Hit = styled.button`
  height: 1.5rem;
  width: 5rem;
  border-color: black;
  background-color: gray;
  color: black;
  font-family: Arial, cursive;
  font-size: 1rem;
  &:hover {
    background-color: #000000;
    cursor: pointer;
    color: white;
  }
`;

const FireOnX = styled.input`
  width: 5rem;
`;
const FireOnY = styled.input`
  width: 5rem;
`;

const ContenedorFire = styled.div`
  flex-direction: column;
  width: 6rem;
`;

const TableroComp = () => {
  const { actions } = useContext(Context);
  let [arrayComp, setarrayComp] = useState(tableroDos);
  let [fireX, apuntarEnX] = useState("");
  let [fireY, apuntarEnY] = useState("");

  let fireButtonClick = (x, y) => {
    const newArray = [...arrayComp];
    if (arrayComp[x][y] === 1) {
      newArray[x][y] = 3;
      setarrayComp(newArray);
      console.log(arrayComp);
    } else if (arrayComp[x][y] === 0) {
      newArray[x][y] = 2;
      setarrayComp(newArray);
    }
    apuntarEnX("");
    apuntarEnY("");

    enemyTargetGen();
  };

  let enemyTargetGen = () => {
    let xEnemy = Math.floor(Math.random() * 10);
    let yEnemy = Math.floor(Math.random() * 10);
    actions.setobjetivoComp(xEnemy, yEnemy);
  };

  return (
    <>
      <ContenedorFire>
        <Hit onClick={() => fireButtonClick(fireX, fireY)}>
          Fire!
        </Hit>
        <br>
        </br>
        <br>
        </br>
        <label>Posición Barra Vertical:</label>
        <FireOnX
          value={fireX}
          onChange={(e) => {
            apuntarEnX(e.target.value);
          }}
        ></FireOnX>
        <br>
        </br>
        <label>Posición Barra Horizontal:</label>
        <FireOnY
          value={fireY}
          onChange={(e) => {
            apuntarEnY(e.target.value);
          }}
        ></FireOnY>
      </ContenedorFire>
      <PanelX>
        <XAxis></XAxis>
        <PanelY>
          <YAxis />
          <PanelCompPlayer>
            {arrayComp[0].map((fit, key) => {
              return (
                <SeaPlayer
                  onClick={() => {
                    apuntarEnY(key);
                    apuntarEnX(0);
                  }}
                  key={key}
                  rightShot={fit === 3 ? true : false}
                  missedShot={fit === 2 ? true : false}
                >
                  <p>{fit}</p>
                </SeaPlayer>
              );
            })}
            {arrayComp[1].map((fit, key) => {
              return (
                <SeaPlayer
                  onClick={() => {
                    apuntarEnY(key);
                    apuntarEnX(1);
                  }}
                  key={key}
                  rightShot={fit === 3 ? true : false}
                  missedShot={fit === 2 ? true : false}
                >
                  <p>{fit}</p>
                </SeaPlayer>
              );
            })}
            {arrayComp[2].map((fit, key) => {
              return (
                <SeaPlayer
                  onClick={() => {
                    apuntarEnY(key);
                    apuntarEnX(2);
                  }}
                  key={key}
                  rightShot={fit === 3 ? true : false}
                  missedShot={fit === 2 ? true : false}
                >
                  <p>{fit}</p>
                </SeaPlayer>
              );
            })}
            {arrayComp[3].map((fit, key) => {
              return (
                <SeaPlayer
                  onClick={() => {
                    apuntarEnY(key);
                    apuntarEnX(3);
                  }}
                  key={key}
                  rightShot={fit === 3 ? true : false}
                  missedShot={fit === 2 ? true : false}
                >
                  <p>{fit}</p>
                </SeaPlayer>
              );
            })}
            {arrayComp[4].map((fit, key) => {
              return (
                <SeaPlayer
                  onClick={() => {
                    apuntarEnY(key);
                    apuntarEnX(4);
                  }}
                  key={key}
                  rightShot={fit === 3 ? true : false}
                  missedShot={fit === 2 ? true : false}
                >
                  <p>{fit}</p>
                </SeaPlayer>
                
              );
            })}
            {arrayComp[5].map((fit, key) => {
              return (
                <SeaPlayer
                  onClick={() => {
                    apuntarEnY(key);
                    apuntarEnX(5);
                  }}
                  key={key}
                  rightShot={fit === 3 ? true : false}
                  missedShot={fit === 2 ? true : false}
                >
                  <p>{fit}</p>
                </SeaPlayer>
                
              );
            })}
            {arrayComp[6].map((fit, key) => {
              return (
                <SeaPlayer
                  onClick={() => {
                    apuntarEnY(key);
                    apuntarEnX(6);
                  }}
                  key={key}
                  rightShot={fit === 3 ? true : false}
                  missedShot={fit === 2 ? true : false}
                >
                  <p>{fit}</p>
                </SeaPlayer>
              );
            })}
            {arrayComp[7].map((fit, key) => {
              return (
                <SeaPlayer
                  onClick={() => {
                    apuntarEnY(key);
                    apuntarEnX(7);
                  }}
                  key={key}
                  rightShot={fit === 3 ? true : false}
                  missedShot={fit === 2 ? true : false}
                >
                  <p>{fit}</p>
                </SeaPlayer>
              );
            })}
            {arrayComp[8].map((fit, key) => {
              return (
                <SeaPlayer
                  onClick={() => {
                    apuntarEnY(key);
                    apuntarEnX(8);
                  }}
                  key={key}
                  rightShot={fit === 3 ? true : false}
                  missedShot={fit === 2 ? true : false}
                >
                  <p>{fit}</p>
                </SeaPlayer>
              );
            })}
            {arrayComp[9].map((fit, key) => {
              return (
                <SeaPlayer
                  onClick={() => {
                    apuntarEnY(key);
                    apuntarEnX(9);
                  }}
                  key={key}
                  rightShot={fit === 3 ? true : false}
                  missedShot={fit === 2 ? true : false}
                >
                  <p>{fit}</p>
                </SeaPlayer>
              );
            })}
          </PanelCompPlayer>
        </PanelY>
        <div>Computadora</div>
      </PanelX>
    </>
  );
};

export default TableroComp;
