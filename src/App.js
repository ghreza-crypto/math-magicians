import { NavLink, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import ShowQuote from './components/ShowQuote';
import Home from './components/Home';

function App() {
  return (
    <div className="container">
      <nav>
        <h1>Math Magicians</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/calculator">Calculator</NavLink>
          </li>
          <li>
            <NavLink to="/quote">Quote</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<ShowQuote />} />
      </Routes>
    </div>
  );
}

export default App;
