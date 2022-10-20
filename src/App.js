import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {lazy, Suspense} from 'react';
import { Container } from '@mui/material';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Offers from './Pages/Offers/Offers';
import { AnimatePresence } from "framer-motion";
import store from './store.jsx';
import { Provider } from 'react-redux';
function App() {
  const TopNav = lazy(() => import('./Components/TopNav/TopNav'));
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Provider store = {store}>
    <BrowserRouter>
    <TopNav/>
      <div className="App">
      <Container maxWidth>
        <AnimatePresence exitBeforeEnter>
      <Routes >
        <Route path="/" element={<Home/>} exact/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/offers" element={<Offers/>}/>
      </Routes>
      </AnimatePresence>
      </Container>      
    </div>
    </BrowserRouter>
    </Provider>
    </Suspense>
  )
}

export default App;
