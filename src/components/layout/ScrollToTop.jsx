'use client';

import { useEffect, useState } from 'react';

export function ScrollToTop() {
  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener(
      'scroll',
      handler
    );

    return () =>
      window.removeEventListener(
        'scroll',
        handler
      );
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-accent rounded-full"
    >
      ↑
    </button>
  );
}