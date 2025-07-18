import { Routes, Route } from 'react-router-dom';
import BugList from '../components/BugList/BugList';
import BugForm from '../components/BugForm/BugForm';
import NotFound from '../components/NotFound/NotFound';
import Navbar from '../components/Navbar/Navbar';
import ReportBug from '../components/pages/ReportBug';

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<BugList />} />
          <Route path="/new" element={<BugForm />} />
          <Route path="/edit/:id" element={<BugForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default AppRoutes;