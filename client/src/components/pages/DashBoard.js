import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const fetchBugs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/bugs');
        const data = await response.json();
        setBugs(data);
      } catch (err) {
        console.error('Failed to fetch bugs:', err);
      }
    };

    fetchBugs();
  }, []);

  const openBugs = bugs.filter(b => b.status === 'open');
  const closedBugs = bugs.filter(b => b.status === 'closed');

  return (
    <div style={{ padding: '20px' }}>
      <h2>📊 Bug Tracker Dashboard</h2>
      <div style={cardContainer}>
        <div style={cardStyle}>
          <h3>Total Bugs</h3>
          <p>{bugs.length}</p>
        </div>
        <div style={cardStyle}>
          <h3>Open Bugs</h3>
          <p>{openBugs.length}</p>
        </div>
        <div style={cardStyle}>
          <h3>Closed Bugs</h3>
          <p>{closedBugs.length}</p>
        </div>
      </div>
    </div>
  );
};

const cardContainer = {
  display: 'flex',
  gap: '20px',
  marginTop: '20px',
};

const cardStyle = {
  flex: 1,
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
};

export default Dashboard;
