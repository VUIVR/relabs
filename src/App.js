import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Auth from "./Pages/Auth/Auth";
import Shop from "./Pages/Shop/Shop";
import EmptyPage from "./Pages/404/EmptyPage";
import Main from "./Pages/Main/Main";


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='login' element={<Auth />} />
        <Route path='shop' element={<Shop />} />
        <Route path='*' element={<EmptyPage />} />

      </Routes>

    </div>
  );
}

export default App;
