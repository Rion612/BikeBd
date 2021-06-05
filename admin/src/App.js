
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Bike from './Container/Bike/Bikes/bikes';
import Brand from './Container/Bike/Brand/brand';
import Ctaegory from './Container/Bike/Category/category';
import Header from './Component/Header/Header';
import Showroom from './Container/Showroom/Showroom';
import dashboard from './Container/Dashboard/dashboard';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={dashboard}/>
          <Route path="/bike" exact  component={Bike}/>
          <Route path="/bike/brand" exact  component={Brand}/>
          <Route path="/bike/category" exact component={Ctaegory}/>
          <Route path="/bike/showrooms" exact component={Showroom}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
