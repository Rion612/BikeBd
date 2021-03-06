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
import { getAllReviews, getAllBikes, getAllhelmet, getAllNews, getBrands, getHelmetBrand, getShowroom, getAllRatings, getCategory } from './Actions';
import Brandbike from './container/BranddBike/brandBike';
import ScrollToTop from './component/ScrollToTop/ScrollToTop';
import BrandHelmet from './container/BrandHelmet/BrandHelmet';
import CompareResult from './container/Comparison/CompareResult';
import BikeDetails from './container/Bike/BikeDetails';
import SearchResult from './container/Search/SearchResult';
import StyleBike from './container/StyleBike/StyleBike';
import BudgetBike from './container/BudgetBike/BudgetBike';
import CCBike from './container/CCBike/CCBike';
import ShowroomBrands from './container/Showrooms/ShowroomBrands';
import SpecificNews from './container/News/SpecificNews';

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
  useEffect(()=>{
    dispatch(getAllNews());
  },[]); 
  useEffect(()=>{
    dispatch(getAllRatings());
  },[]); 
  useEffect(()=>{
    dispatch(getCategory());
  },[]); 
  useEffect(()=>{
    dispatch(getAllReviews());
  },[]);
  
  return (
    <div>
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path="/bike_price" exact component={Bike}/>
          <Route path="/" exact component={Home}/>
          <Route path="/comparison" exact component={Comparison}/>
          <Route path="/showrooms" exact component={Showroom}/>
          <Route path="/news" exact component={News}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/bike/scooter" exact component={Scooter}/>
          <Route path="/comparison/result" exact component={CompareResult}/>
          <Route path="/helmets" exact component={Helmet}/>
          <Route path="/brands" exact component={Brands}/>
          <Route path="/bikes/electric_bikes" exact component={ElectricBike}/>
          <Route path="/brands/:slug" exact component={Brandbike}/>
          <Route path="/bikes/style/:slug" exact component={StyleBike}/>
          <Route path="/helmets/brand/:slug" exact component={BrandHelmet}/>
          <Route path="/bikes/details/:slug" exact component={BikeDetails}/>
          <Route path="/search/filter" exact component={SearchResult}/>
          <Route path="/bikes/budget" exact component={BudgetBike} />
          <Route path="/bikes/cc" exact component={CCBike} />
          <Route path="/brand/showrooms/:slug" exact component={ShowroomBrands} />    
          <Route path="/news/:id" exact component={SpecificNews} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
