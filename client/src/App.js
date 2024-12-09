import {BrowserRouter, Route,Router,Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard';
import Todo from "./Components/Todo"
import Chooseproduct from "./Components/Chooseproduct"
import CampaignSettings from './Components/CampaignSettings';
import Readytogo from './Components/Readytogo';
function App() {
  return (
<BrowserRouter>
    <div className="App">
   
     
   
     <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/Todo' element={<Todo/>}></Route>
      <Route path='/ChooseProduct' element={<Chooseproduct/>}></Route>
       <Route path='/CampaignSettings' element={<CampaignSettings/>}></Route>
       <Route path='/Readytogo' element={<Readytogo/>}></Route>

     </Routes>

  
      </div>
    
   
    </BrowserRouter>
  );
}

export default App;
