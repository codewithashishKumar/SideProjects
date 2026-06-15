import { Routes, Route } from 'react-router-dom'
import LinksHover from './components/LinksHover'
import Cards from './components/Cards'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LinksHover />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </div>
  )
}