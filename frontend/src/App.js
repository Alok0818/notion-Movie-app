import './App.css';
import {Routes,Route} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import Updatemovie from './Components/Updatemovie/Updatemovie';

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<AdminPanel />} />
        <Route path="/update/id" element={<Updatemovie />} />

      </Routes>
    </>
  );
}

export default App;
