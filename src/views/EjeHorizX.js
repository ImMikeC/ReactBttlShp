import React from "react";
import ejeX from "../components/EjeX";
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
`;

export const XAxis = () => {
  return (
    <Malla>
      {ejeX.map((sim, key) => {
        return (
          <Ubicacion key={key}>
            <p>{sim}</p>
          </Ubicacion>
        );
      })}
    </Malla>
  );
};
