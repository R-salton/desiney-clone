
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
   
   
    </div>
  );
}

export default App;
