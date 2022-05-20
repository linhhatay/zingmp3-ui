import "./App.css";
import './Styles/Grid.css'
import { Sidebar } from "./Components/Sidebar";
import {Container} from "./Components/Container"

function App() {
  return (
    <div className="App">
     
      <Sidebar />
      <Container />

      <div className="background"></div>
    </div>
  );
}

export default App;
