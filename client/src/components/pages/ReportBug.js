import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReportBug = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bugData = {
      title,
      description,
      status: 'open',
      createdAt: new Date(),
    };

    try {
      const response = await fetch('http://localhost:5000/api/bugs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bugData),
      });

      if (response.ok) {
        setSubmitted(true);
        setTitle('');
        setDescription('');
        setTimeout(() => {
          navigate('/');
        }, 1500); // Redirect after 1.5s
      } else {
        alert('❌ Error submitting bug report');
      }
    } catch (err) {
      console.error('Error submitting bug:', err);
    }
  };

  return (
    <div className="report-bug-page" style={containerStyle}>
      <h2>🐞 Report a Bug</h2>

      {submitted && <p style={successMsg}>✅ Bug reported successfully! Redirecting...</p>}

      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>Bug Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />

        <label style={labelStyle}>Description</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          style={inputStyle}
        />

        <button type="submit" style={btnStyle}>Submit</button>
      </form>
    </div>
  );
};

const containerStyle = {
  padding: '30px',
  maxWidth: '600px',
  margin: '0 auto',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  marginBottom: '5px',
  fontWeight: 'bold',
};

const inputStyle = {
  marginBottom: '20px',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const btnStyle = {
  padding: '10px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const successMsg = {
  color: 'green',
  marginBottom: '20px',
};

export default ReportBug;
