import MainView from "./views/Main";
import injectContext from "./store/Context";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MainView />
    </div>
  );
}

export default injectContext(App);
