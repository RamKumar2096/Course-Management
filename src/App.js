import React from 'react';
import {Routes, Route} from "react-router-dom";
import LayoutPage from './Pages/LayoutPage';
import HomePage from './Pages/HomePage';
import ListPage from './Pages/ListPage';
import AddPage from './Pages/AddPage';
import ViewPage from './Pages/ViewPage';




const App = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route path="/" element={<HomePage />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/list" element={<ListPage/>}></Route>
      <Route path="/add" element={<AddPage />}></Route>
      {/* id: */}
      <Route path="/view/:id" element={<ViewPage />}></Route>
      </Route>
      </Routes>  
    </div>
  )
}

export default App;
