import { Routes,Route } from 'react-router-dom';
import Firstoage from './compontes/Firstoage';
import Navbar from './compontes/Navbar';
import About from './compontes/About';
import Top3 from './compontes/Top3'
import Contacts from './compontes/Contacts';
import Login from './compontes/Login'
import Complex from './Complex';
import Deatils from './Deatils';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
        <Route path="Firstoage/" element={<Firstoage/>} />
        <Route path="About/*" element={<About/>} />
        <Route path="Top3/*" element={<Top3/>} />
        <Route path="Complex/*" element={<Complex/>} />
        <Route path="Contacts/*" element={<Contacts/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Deatils" element={<Deatils/>} />
      </Routes>
    </div>
  );
}

export default App;
