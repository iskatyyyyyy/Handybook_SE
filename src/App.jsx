import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/student/Home.jsx';
import Chatbot from './pages/student/chatbot';
// Import other pages as you create them

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chatbot />} />
        {/* <Route path="/policies" element={<Policies />} /> */}
      </Routes>
    </Router>
  );
}

export default App;