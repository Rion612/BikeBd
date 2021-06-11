import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bike from './container/Bike/Bike';
import Home from './container/Home/Home'
import Comparison from './container/Comparison/Comparison';
import Showroom from './container/Showrooms/Showroom';
import News from './container/News/News';
import Contact from './container/Contact us/Contact';
import Scooter from './container/Scooter/Scooter';
import Helmet from './container/Helmet/Helmet';
import Brands from './container/Brands/Brands';
import ElectricBike from './container/Electric bikes/Electric.bikes';

function App() {
  return (
    <div>
      <Router>
        <switch>
          <Route path="/bike_price" exact component={Bike}/>
          <Route path="/" exact component={Home}/>
          <Route path="/comparison" exact component={Comparison}/>
          <Route path="/showrooms" exact component={Showroom}/>
          <Route path="/news" exact component={News}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/bike/scooter" exact component={Scooter}/>
          <Route path="/helmets" exact component={Helmet}/>
          <Route path="/brands" exact component={Brands}/>
          <Route path="/bikes/electric_bikes" component={ElectricBike}/>
        </switch>
      </Router>

    </div>
  );
}

export default App;
