import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {lazy, Suspense, useState, useEffect, CSSProperties} from 'react';
import { Container } from '@mui/material';
import { AnimatePresence } from "framer-motion";
import store from './store.jsx';
import CircleLoader from "react-spinners/CircleLoader";
import { Provider } from 'react-redux';
function App() {
  const TopNav = lazy(() => import('./Components/TopNav/TopNav'));
  const Home = lazy(() => import('./Pages/Home/Home'));
  const Contact = lazy(() => import('./Pages/Contact/Contact'));
  const Offers = lazy(() => import('./Pages/Offers/Offers'));
  //usestate loading and setLoading
  const [loading, setLoading] = useState(false);
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    borderColor: "red",
  };
  //useEffect
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },5000);
    }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Provider store = {store}>
    <BrowserRouter>
    
      <div className="App">
      {
        loading ?
        <CircleLoader
        color="#75a5d8"
        cssOverride={override}
        loading
        size={70}
        speedMultiplier={1}
        />
        
      : 
      <Container maxWidth>
      <TopNav/>
        <AnimatePresence exitBeforeEnter>
      <Routes >
        <Route path="/" element={<Home/>} exact/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/offers" element={<Offers/>}/>
      </Routes>
      </AnimatePresence>
      </Container> 
       }
           
    </div>
    </BrowserRouter>
    </Provider>
    </Suspense>
  )
}

export default App;
