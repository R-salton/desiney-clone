
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Login />} />
      </Routes>
   
   
    </div>
  );
}

export default App;
