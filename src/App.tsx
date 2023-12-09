import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import InfoContainer from "./components/InfoContainer/InfoContainer";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="app">
      <NavBar />
      <InfoContainer />
      <Dashboard />
    </div>
  );
}

export default App;
