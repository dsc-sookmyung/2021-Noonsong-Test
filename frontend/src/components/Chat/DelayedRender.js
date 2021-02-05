import { useState, useEffect } from 'react';

const useDelayedRender = delay => {
  const [delayed, setDelayed] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setDelayed(false), delay);
    return () => clearTimeout(timeout);
  }, []);
  return fn => !delayed && fn();
};

const DelayedRender = ({ delay, children }) => useDelayedRender(delay)(() => children);

export default DelayedRender;
