
import './App.css';

import Login from './Admin/login';
import RegisterForm from './Admin/register';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element ={<Login/>}/>
        <Route path = '/signup' element ={<RegisterForm/>}/>
      </Routes>
     

    </div>
  );
}

export default App;
