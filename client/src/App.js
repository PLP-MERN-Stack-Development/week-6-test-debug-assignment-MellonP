import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage'; // ✅ Import HomePage
import BugsPage from './components/pages/BugsPage';
import BugDetail from './components/pages/BugDetail';
import ReportBug from './components/pages/ReportBug';
import Dashboard from './components/pages/DashBoard';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* ✅ Home route with welcome screen */}
          <Route path="/" element={<HomePage />} />

          {/* Bug Routes */}
          <Route path="/bugs" element={<BugsPage />} />
          <Route path="/bugs/:id" element={<BugDetail />} />

          {/* Report and Dashboard */}
          <Route path="/report" element={<ReportBug />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Catch-all route */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
