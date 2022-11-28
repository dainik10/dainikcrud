
import './App.css';
import Home from './components/Home';
import AddUser from './components/Adduser';
import Navbar from './components/Layout/Navbar';
import Edituser from './components/Edituser';
import User from './components/User';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/adduser' element={<AddUser />} />
          <Route exact path='/edituser/:id' element={<Edituser />} />
          <Route exact path='/user/:id' element={<User />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
