import Greetings from "./classComp/Greetings";
import GreetingsF from "./functionalComp/GreetingsF";
import "./App.css";

function App() {
  return (
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
  );
}

export default App;
