import React from 'react';
import Main from './components/Main/Main';
import { Route, BrowserRouter } from 'react-router-dom';

// const pointColors = ['#4379B7', '#0D2D84']; // 연한 파랑, 코발트 블루

function App() {
  return (
    <BrowserRouter>
      <Route path="/" element={<Main/>}></Route>
    </BrowserRouter>
  );
}

export default App;
