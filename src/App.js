import { BrowserRouter, Routes, Route } from "react-router-dom";



import Router from '../src/router';
import './App.css';


function App() {
  return (
      <Routes>
          {
            Router.map(item => <Route path={item.path} element={item.element}/>)
          }
      </Routes>
  );
}

export default App;
