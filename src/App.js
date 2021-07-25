import logo from './logo.svg';
import './App.css';
import {useSelector} from "react-redux";

function App() {

  const name = useSelector((state) => state.reducer.name)

  return (
    <div className="App">
      {name}
    </div>
  );
}

export default App;
