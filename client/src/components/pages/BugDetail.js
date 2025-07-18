import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBugById } from '../../services/bugService';

const BugDetail = () => {
  const { id } = useParams();
  const [bug, setBug] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBug = async () => {
      try {
        const bugData = await getBugById(id); // Changed this line
        setBug(bugData);
      } catch (error) {
        console.error('Error fetching bug:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBug();
  }, [id]);

  if (loading) return <div>Loading bug details...</div>;
  if (!bug) return <div>Bug not found</div>;

  return (
    <div className="bug-detail">
      <h1>{bug.title}</h1>
      <p>{bug.description}</p>
      <div className="meta">
        <span className={`status ${bug.status}`}>{bug.status}</span>
        <span className={`priority ${bug.priority}`}>{bug.priority}</span>
      </div>
    </div>
  );
};

export default BugDetail;