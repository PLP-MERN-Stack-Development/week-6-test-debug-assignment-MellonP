import { useEffect } from 'react';
import useBugs from '../../hooks/useBugs';
import BugCard from '../BugCard/BugCard';
import './BugList.css';

const BugList = () => {
  const { bugs, loading, error, fetchBugs } = useBugs();

  useEffect(() => {
    fetchBugs();
  }, [fetchBugs]);

  if (loading) return <div className="loading">Loading bugs...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!bugs || !Array.isArray(bugs)) return <div className="error">No bugs data available</div>;

  return (
    <div className="bug-list">
      <h1>Bug Tracker</h1>
      <div className="bugs-container">
        {bugs.length > 0 ? (
          bugs.map(bug => (
            <BugCard key={bug._id} bug={bug} />
          ))
        ) : (
          <div className="no-bugs">No bugs found. Create one to get started!</div>
        )}
      </div>
    </div>
  );
};

export default BugList;