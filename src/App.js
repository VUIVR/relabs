import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Auth from "./Pages/Auth/Auth";
import Shop from "./Pages/Shop/Shop";
import  EmptyPage from "./Pages/EmptyPage/EmptyPage";


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Auth/>} />
        <Route path='login' element={<Auth/>} />
        <Route path='shop' element={<Shop/>} />
        <Route path='*' element={<EmptyPage />} />
        
      </Routes>
      
    </div>
  );
}

export default App;
