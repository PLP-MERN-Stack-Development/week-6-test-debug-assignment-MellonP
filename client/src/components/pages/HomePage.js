import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>🐞 Bug Tracker</h1>
      <p>Welcome to your debugging HQ.</p>
      <div style={{ marginTop: '30px' }}>
        <Link to="/report" style={btnStyle}>Report Bug</Link>
        <Link to="/dashboard" style={btnStyle}>Dashboard</Link>
      </div>
    </div>
  );
};

const btnStyle = {
  display: 'inline-block',
  margin: '0 15px',
  padding: '12px 24px',
  backgroundColor: '#007BFF',
  color: 'white',
  borderRadius: '8px',
  textDecoration: 'none',
};

export default HomePage;
