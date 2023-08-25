import { Route, Routes } from 'react-router-dom';
import s from './App.module.css';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import Basket from './components/Basket/Basket';
import Footer from './components/Footer/Footer';
import YourPicture from './components/YourPicture/YourPicture';

function App() {
 
  return (
    <div className={s.App}>
      <Header/>
      <div className={s.container}>
        <Routes>
            <Route path='/' element={<Catalog/>}/>
            <Route path='/basket' element={<Basket/>}/>
            <Route path='/add' element={<YourPicture/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
