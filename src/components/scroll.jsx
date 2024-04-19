import React, { useRef, useEffect } from 'react';

const ScrollBar = () => {
  const scrollRef = useRef(null);

  // Function to perform smooth scrolling with animation options
  const handleScroll = (scrollToY, duration = 500, easing = 'easeInOutCubic') => {
    const element = scrollRef.current;
    if (!element) return;

    const startPosition = element.scrollTop;
    const change = scrollToY - startPosition;
    const startTime = null !== performance && performance.now();

    const animateScroll = () => {
      const now = null !== performance && performance.now();
      const time = Math.min(1, (now - startTime) / duration);
      const ease = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      const easedTime = ease(time);
      element.scrollTop = startPosition + change * easedTime;

      if (time < 1) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    window.requestAnimationFrame(animateScroll);
  };

  // Simulate a click event to trigger scrolling on component mount (optional)
  useEffect(() => {
    handleScroll(321); // Replace 321 with your desired scroll position (in pixels)
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{

        width: '6px',
        height: '270px',
        background: '#C4C4C4',
        borderRadius: '20px',
      }}
    />
  );
};

export default ScrollBar;