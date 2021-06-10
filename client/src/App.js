import './App.css';
import Header from './component/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
      </Router>

    </div>
  );
}

export default App;
