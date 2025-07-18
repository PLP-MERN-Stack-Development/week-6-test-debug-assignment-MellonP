import { useState, useEffect, useCallback } from 'react';
import { getBugs } from '../services/bugService';

const useBugs = () => {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBugs = useCallback(async () => {
    const controller = new AbortController();
    
    try {
      setLoading(true);
      setError(null);
      const data = await getBugs({ signal: controller.signal });
      
      if (!Array.isArray(data)) {
        throw new Error('Invalid data format: expected array');
      }
      
      setBugs(data);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message || 'Failed to fetch bugs');
      }
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
    
    return () => controller.abort();
  }, []);

  useEffect(() => {
    fetchBugs();
  }, [fetchBugs]);

  return { 
    bugs,
    loading,
    error,
    fetchBugs,
    isEmpty: !loading && !error && bugs.length === 0
  };
};

export default useBugs;