import React from "react";
import styled from "styled-components";
import PlayerBattleGrid from "./TableroDosComp";
import TableroComp from "./TableroUnoJugador";
//import bkg from "../img/bkg.jpg";

//Controls Container
const ControlsContainer = styled.div`
  background-color: white;
  height: 80px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10rem;
`;

const Title = styled.h1`
  color: black;
  font-family: "Arial", sans-serif;
  /* font-family: "Bangers", cursive; */
`;

//End Controls Container

const BattleGridsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

`;

const ControlsContainerView = () => {
  //probar hacer la variable aki del styled component

  return (
    <>
      <ControlsContainer>
        <Title>ReactJS BattleShip</Title>
      </ControlsContainer>
      <BattleGridsContainer>
        <PlayerBattleGrid />
        <TableroComp />
      </BattleGridsContainer>
    </>
  );
};

export default ControlsContainerView;
