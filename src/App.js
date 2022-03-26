import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Auth from "./Pages/Auth/Auth";
import Shop from "./Pages/Shop/Shop";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage.jsx";
import Main from "./Pages/Main/Main";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='login' element={<Auth />} />
          <Route path='shop' element={<Shop />} />
          <Route path='*' element={<NotFoundPage />} />       
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

