import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const Counter = ({ end, decimals }) => {
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    // Check if IntersectionObserver is supported
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = countRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  return (
    <span ref={countRef} className="count-text" data-from="0" data-to={end}>
      {isVisible ? (
        <CountUp
          start={0}
          end={end ? end : 100}
          duration={3}
          decimals={decimals ? decimals : 0}
        />
      ) : (
        "0"
      )}
    </span>
  );
};

export default Counter;
