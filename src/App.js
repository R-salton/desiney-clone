
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
   
   
    </div>
  );
}

export default App;
