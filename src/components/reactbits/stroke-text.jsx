import { useRef } from 'react';

export function StrokeText({ text, className = '' }) {
  const ref = useRef(null);
  const move = (event) => {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--stroke-x', `${event.clientX - rect.left}px`);
    ref.current.style.setProperty('--stroke-y', `${event.clientY - rect.top}px`);
  };
  const leave = () => {
    ref.current.style.setProperty('--stroke-x', '50%');
    ref.current.style.setProperty('--stroke-y', '50%');
  };

  return (
    <h1
      ref={ref}
      className={`stroke-text ${className}`}
      onPointerMove={move}
      onPointerLeave={leave}
      aria-label={text}
    >
      <span className="stroke-outline" aria-hidden="true">
        {text}
      </span>
      <span className="stroke-fill" aria-hidden="true">
        {text}
      </span>
    </h1>
  );
}
