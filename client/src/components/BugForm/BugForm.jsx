import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBug } from '../../services/bugService';
import './BugForm.css';

const BugForm = () => {
  const [formData] = useState({
    title: '',
    description: '',
    status: 'open',
    priority: 'medium'
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBug(formData);
      navigate('/');
    } catch (error) {
      console.error('Error creating bug:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bug-form">
      <h2>Report New Bug</h2>
      {/* Form fields here */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default BugForm;