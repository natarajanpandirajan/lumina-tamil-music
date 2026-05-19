import { useRef, useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../../ui/Icons/Icons';
import './HorizontalScroll.css';

export default function HorizontalScroll({ children, gap = 16 }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      ro.disconnect();
    };
  }, [children]);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <div className="h-scroll-wrapper">
      {canScrollLeft && (
        <button
          className="h-scroll-btn h-scroll-btn-left"
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
        >
          <ChevronLeftIcon size={18} />
        </button>
      )}
      <div
        className="h-scroll-track"
        ref={scrollRef}
        style={{ gap: `${gap}px` }}
      >
        {children}
      </div>
      {canScrollRight && (
        <button
          className="h-scroll-btn h-scroll-btn-right"
          onClick={() => scroll(1)}
          aria-label="Scroll right"
        >
          <ChevronRightIcon size={18} />
        </button>
      )}
    </div>
  );
}
