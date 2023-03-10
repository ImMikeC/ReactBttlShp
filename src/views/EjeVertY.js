import React from "react";
import ejeY from "../components/EjeY";
import styled from "styled-components";

const Ubicacion = styled.div`
  box-sizing: border-box;
  background-color: #585858;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0px;
  border: 0.5px solid #f0f8ff;
  p {
    view: visible;
    font-size: 0.8rem;
    margin: 0;
    text-align: center;
    color: white;
  }
`;

const Malla = styled.div`
  display: flex;
  flex-direction: column;
`;


export const YAxis = () => {
  return (
    <Malla>
      {ejeY.map((fit, key) => {
        return (
          <Ubicacion key={key}>
            <p>{fit}</p>
          </Ubicacion>
        );
      })}
    </Malla>
  );
};
