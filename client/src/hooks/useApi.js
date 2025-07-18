import { useState } from 'react';
import { createBug } from '../../services/bugService';

const useApi = (apiFunc) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (...args) => {
    setLoading(true);
    try {
      const result = await apiFunc(...args);
      setData(result);
      setError(null);
      return result;
    } catch (err) {
      setError(err.message || 'Unexpected Error');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, request };
};

export default useApi;