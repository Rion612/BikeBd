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
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllBikes, getAllhelmet, getBrands, getHelmetBrand, getShowroom } from './Actions';
import Brandbike from './container/BranddBike/brandBike';
import ScrollToTop from './component/ScrollToTop/ScrollToTop';
import BrandHelmet from './container/BrandHelmet/BrandHelmet';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllhelmet());
  }, []);
  useEffect(() => {
    dispatch(getBrands());
  }, []);
  useEffect(() => {
    dispatch(getHelmetBrand());
  }, []);
  useEffect(()=>{
    dispatch(getShowroom());
  },[]);
  useEffect(()=>{
    dispatch(getAllBikes());
  },[]);
  return (
    <div>
      <Router>
        <ScrollToTop/>
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
          <Route path="/bikes/electric_bikes" exact component={ElectricBike}/>
          <Route path="/brands/:slug" exact component={Brandbike}/>
          <Route path="/helmets/brand/:slug" exact component={BrandHelmet}/>
        </switch>
      </Router>

    </div>
  );
}

export default App;
