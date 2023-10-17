import { Routes,Route } from 'react-router-dom';
import Firstoage from './compontes/Firstoage';
import Navbar from './compontes/Navbar';
import About from './compontes/About';
import Top3 from './compontes/Top3'
import Contacts from './compontes/Contacts';
import Complex from './Complex';
import Deatils from './Deatils';
import Form from './Form'
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
        <Route path="/Deatils" element={<Deatils/>} />
        <Route path="/Form" element={<Form/>} />
      </Routes>
    </div>
  );
}

export default App;
