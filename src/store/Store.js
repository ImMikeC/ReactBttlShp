const getState = ({ setStore, getActions, getStore }) => {
    return {
      store: {
        objetivoComp: [],
      },
      actions: {
        setobjetivoComp: (x, y) => {
          setStore({ objetivoComp: [x, y] });
        },
      },
    };
  };
  
  export default getState;