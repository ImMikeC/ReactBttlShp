const getState = ({ setStore, getActions, getStore }) => {
    return {
      store: {
        compTarget: [],
      },
      actions: {
        setCompTarget: (x, y) => {
          setStore({ compTarget: [x, y] });
        },
      },
    };
  };
  
  export default getState;