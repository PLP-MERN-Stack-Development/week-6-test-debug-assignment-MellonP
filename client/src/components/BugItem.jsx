import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BugItem.css'; // We'll create this next

const BugItem = ({ bug }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/bugs/${bug._id}`); // Navigate to bug detail page
  };

  return (
    <div className="bug-item" onClick={handleClick}>
      <div className="bug-header">
        <h3 className="bug-title">{bug.title}</h3>
        <span className={`priority ${bug.priority}`}>
          {bug.priority}
        </span>
      </div>
      <p className="bug-description">
        {bug.description.substring(0, 100)}...
      </p>
      <div className="bug-footer">
        <span className={`status ${bug.status}`}>
          {bug.status}
        </span>
      </div>
    </div>
  );
};

export default BugItem;