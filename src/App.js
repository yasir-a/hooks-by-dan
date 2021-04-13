import Greetings from "./classComp/Greetings";
import GreetingsF from "./functionalComp/GreetingsF";
import ThemeContextProvider from "./context/ThemeContextProvider";
import "./App.css";

function App() {
  return (
    <ThemeContextProvider>
      <div className="greetings-container">
        <div className="class-greetings">
          <p className="heading">Class Component</p>
          <Greetings name="Mary" />
        </div>
        <div className="functional-greetings">
          <p className="heading">Functional Component</p>
          <GreetingsF name="Mary" />
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
