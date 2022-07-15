import './App.css';
import {Routes,Route} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import HomePage from './Components/HomePage/HomePage';
import Edit from './Components/Edit/Edit';

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AdminPanel />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
