import { Routes, Route } from 'react-router-dom';
import LinksHover from './components/LinksHover';
import Cards from './components/Cards';
import SimpleCounter from './components/simpleCounter';
import SampleUser from './components/userProfile';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LinksHover />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/SimpleCounter" element={<SimpleCounter />} />
        <Route path="/SampleUser" element={<SampleUser />} />
      </Routes>
    </div>
  )
}