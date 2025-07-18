import PropTypes from 'prop-types'; // ✅ Add this
import './BugCard.css';

const BugCard = ({ bug }) => {
  return (
    <div className="bug-card">
      <h2>{bug.title}</h2>
      <p>{bug.description}</p>
      <div className="bug-meta">
        <span className={`status ${bug.status.toLowerCase()}`}>{bug.status}</span>
        <span className={`priority ${bug.priority.toLowerCase()}`}>{bug.priority}</span>
      </div>
    </div>
  );
};

// ✅ PropTypes validation
BugCard.propTypes = {
  bug: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
  }).isRequired,
};

export default BugCard;
