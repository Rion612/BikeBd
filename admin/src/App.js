
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
import Helmet from './Container/Helmet/Helmet';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllNews, getBrands, getHelmetBrand } from './Actions';
import HelmetBrand from './Container/Helmet brand/HelmetBrand';
import News from './Container/News/News';
import CreateBikes from './Container/Bike/Bikes/create.bikes';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrands());
  }, []);
  useEffect(() => {
    dispatch(getHelmetBrand());
  }, []);

  useEffect(() => {
    dispatch(getAllNews());
  }, []);





  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={dashboard} />
          <Route path="/bike" exact component={Bike} />
          <Route path="/bike/brand" exact component={Brand} />
          <Route path="/bike/category" exact component={Ctaegory} />
          <Route path="/bike/showrooms" exact component={Showroom} />
          <Route path="/helmets" exact component={Helmet} />
          <Route path="/helmets/brand" exact component={HelmetBrand} />
          <Route path="/news" exact component={News} />
          <Route path="/create/bikes" exact component={CreateBikes}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
