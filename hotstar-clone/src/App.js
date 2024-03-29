import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../src/components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <>
       <Router>
        <Header/>

        <Routes>

        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/detail/:id" element={<Detail/>}></Route>

        </Routes>

       </Router>
    </>
  )
};


export default App;
