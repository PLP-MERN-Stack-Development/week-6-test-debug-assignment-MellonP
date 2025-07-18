import { createContext, useContext, useState, useEffect } from 'react';
import bugService from '../services/bugService';

const BugContext = createContext();

export const BugProvider = ({ children }) => {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBugs = async () => {
    try {
      const data = await bugService.getAll();
      setBugs(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const createBug = async (bugData) => {
    try {
      const newBug = await bugService.create(bugData);
      setBugs(prev => [...prev, newBug]);
      return newBug;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  return (
    <BugContext.Provider value={{ bugs, loading, error, createBug, fetchBugs }}>
      {children}
    </BugContext.Provider>
  );
};

export const useBugContext = () => useContext(BugContext);