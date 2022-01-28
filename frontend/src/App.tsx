import React from 'react';
import Main from './components/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const pointColors = ['#4379B7', '#0D2D84']; // 연한 파랑, 코발트 블루

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
