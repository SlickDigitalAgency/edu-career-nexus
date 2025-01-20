import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import Index from "./pages/Index"
import Auth from "./pages/Auth"
import Dashboard from "./pages/Dashboard"
import Institutions from "./pages/Institutions"
import Application from "./pages/Application"

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/institutions" element={<Institutions />} />
        <Route path="/application" element={<Application />} />
      </Routes>
    </Router>
  )
}

export default App