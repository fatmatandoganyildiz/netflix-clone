import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <h1 className="text-white">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </h1>
  );
}

export default App;
