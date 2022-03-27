import React, {Fragment} from 'react';
import { BrowserRouter , Route, Routes } from "react-router-dom";

// layout
import Contenedor from './components/login/contenedor';
import Dasboard from "./components/dashboard/Dasboard";


function App() {
  const auth = true;

  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Contenedor/>} />
        <Route exact path="/dashboard" element={<Dasboard/>} />
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
