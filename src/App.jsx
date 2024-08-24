import Home from '../components/home';
import Contact from '../components/contact';
import About from '../components/about';
import { BrowserRouter as Router , Route,Routes,Link } from 'react-router-dom';


import './App.css'

function App() {
  return (<Router>
    <div>
      <ul>
        <li><Link to="/components/home.jsx">Home</Link></li>
        <li><Link to="/components/about.jsx">About</Link></li>
        <li><Link to="/components/contact.jsx">Contact</Link></li>
      </ul>
      <Routes>
        <Route path='/components/home.jsx' element={<Home/>}></Route>
        <Route path='/components/about.jsx' element={<About/>}></Route>
        <Route path='/components/contact.jsx' element={<Contact/>}></Route>
      </Routes>
    </div>
  </Router>)
}

export default App;
