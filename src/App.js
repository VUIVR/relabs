import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Auth from "./Pages/Auth/Auth";
import Shop from "./Pages/Shop/Shop";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage.jsx";
import Main from "./Pages/Main/Main";
import { Container } from "@mui/material";


function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='login' element={<Auth />} />
          <Route path='shop' element={<Shop />} />
          <Route path='*' element={<NotFoundPage />} />       
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

