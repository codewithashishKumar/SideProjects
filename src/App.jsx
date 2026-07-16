import { Routes, Route, Link } from 'react-router-dom';
import LinksHover from './components/LinksHover';
import Cards from './components/Cards';
import SimpleCounter from './components/simpleCounter';
import SampleUser from './components/userProfile';
// import Counter from './components/Counter';
import ShoppingCart from './components/ShoppingCart/ShoppingCart'

export default function App() {
  return (
    <div>
      <header
        style={{
          display: 'flex',
          gap: '16px',
          padding: '16px',
          background: '#f5f5f5',
          borderBottom: '1px solid #ddd',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0'
        }}
      >
        <Link to="/">Links Hover</Link>
        <Link to="/cards">Cards</Link>
        <Link to="/SimpleCounter">Simple Counter</Link>
        <Link to="/SampleUser">Sample User</Link>
        {/* <Link to="/Counter">Counter</Link> */}
        <Link to="/ShoppingCart">ShoppingCart</Link>
      </header>

      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<LinksHover />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/SimpleCounter" element={<SimpleCounter />} />
          <Route path="/SampleUser" element={<SampleUser />} />
          {/* <Route path="/Counter" element={<Counter />} /> */}
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
        </Routes>
      </main>
    </div>
  );
}