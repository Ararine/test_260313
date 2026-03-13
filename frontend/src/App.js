import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";

function App() {
  return (
    <>
      <div className="App">
        <Button variant="text" color="secondary">
          Hello World
        </Button>
        <Button variant="contained" color="success">
          Hello World
        </Button>
        <Button variant="outlined" color="error">
          Hello World
        </Button>
      </div>
    </>
  );
}

export default App;
