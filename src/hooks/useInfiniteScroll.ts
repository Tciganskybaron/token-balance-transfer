import { useState, useEffect } from 'react';

export function useInfiniteScroll(initialCount: number, incrementBy: number) {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setVisibleCount(prev => prev + incrementBy);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [visibleCount, setVisibleCount] as const;
}
