import React from 'react';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// const pointColors = ['#4379B7', '#0D2D84']; // 연한 파랑, 코발트 블루

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main}></Route>
    </Router>
  );
}

export default App;
