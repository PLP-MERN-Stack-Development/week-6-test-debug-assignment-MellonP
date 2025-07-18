import { useEffect, useState } from 'react';
import { getBugs } from '../../services/bugService';
import BugList from '../../components/BugList/BugList';

const BugsPage = () => {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBugs = async () => {
      try {
        const bugsData = await getBugs();
        setBugs(bugsData);
      } catch (err) {
        console.error('Error fetching bugs:', err);
        setError('Failed to load bugs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBugs();
  }, []);

  if (loading) return <div className="loading-spinner">Loading bugs...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!bugs.length) return <div className="empty-state">No bugs found</div>;

  return (
    <div className="bugs-page">
      <h1>Bug Tracker</h1>
      <BugList bugs={bugs} />
    </div>
  );
};

export default BugsPage;