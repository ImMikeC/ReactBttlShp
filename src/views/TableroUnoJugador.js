import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";
import tableroDos from "../components/TableroDos";
import { YAxis } from "./EjeVertY";

import { Context } from "../store/Context";
import { XAxis } from "./EjeHorizX";

const PanelComp = styled.div`
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
    visibility: hidden;
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
    props.isSelected &&
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
  let [fireX, setFireX] = useState("");
  let [fireY, setFireY] = useState("");

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
    setFireX("");
    setFireY("");

    enemyTargetGen();
  };

  let enemyTargetGen = () => {
    let xEnemy = Math.floor(Math.random() * 10);
    let yEnemy = Math.floor(Math.random() * 10);
    actions.setCompTarget(xEnemy, yEnemy);
  };

  return (
    <>
      <ContenedorFire>
        <Hit onClick={() => fireButtonClick(fireX, fireY)}>
          Fire!
        </Hit>
        <br></br>
        <label>Eje x (0-9):</label>
        <FireOnX
          value={fireX}
          onChange={(e) => {
            setFireX(e.target.value);
          }}
        ></FireOnX>
        <label>Eje y (0-9):</label>
        <FireOnY
          value={fireY}
          onChange={(e) => {
            setFireY(e.target.value);
          }}
        ></FireOnY>
      </ContenedorFire>
      <PanelX>
        <XAxis></XAxis>
        <PanelY>
          <YAxis />
          <PanelComp>
            {arrayComp[0].map((fit, key) => {
              return (
                <SeaPlayer
                  onClick={() => {
                    setFireY(key);
                    setFireX(0);
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
                    setFireY(key);
                    setFireX(1);
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
                    setFireY(key);
                    setFireX(2);
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
                    setFireY(key);
                    setFireX(3);
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
                    setFireY(key);
                    setFireX(4);
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
                    setFireY(key);
                    setFireX(5);
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
                    setFireY(key);
                    setFireX(6);
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
                    setFireY(key);
                    setFireX(7);
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
                    setFireY(key);
                    setFireX(8);
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
                    setFireY(key);
                    setFireX(9);
                  }}
                  key={key}
                  rightShot={fit === 3 ? true : false}
                  missedShot={fit === 2 ? true : false}
                >
                  <p>{fit}</p>
                </SeaPlayer>
              );
            })}
          </PanelComp>
        </PanelY>
        <div>Computadora</div>
      </PanelX>
    </>
  );
};

export default TableroComp;
