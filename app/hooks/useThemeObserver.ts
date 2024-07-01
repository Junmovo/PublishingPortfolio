import { useEffect, useRef } from 'react';

export const useThemeObserver = (
  setState: React.Dispatch<React.SetStateAction<number>>,
  stateNumber: number
): React.MutableRefObject<HTMLDivElement | null>[] => {
  const isRef = useRef<HTMLDivElement | null>(null);
  const option = { threshold: 0, rootMargin: `-500px 0px` };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(stateNumber);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setState(stateNumber);
        }
      });
    }, option);

    if (isRef.current) {
      observer.observe(isRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return [isRef];
};
