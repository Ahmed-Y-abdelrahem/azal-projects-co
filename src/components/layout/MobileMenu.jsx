'use client';

import Link from 'next/link';

import { NAVIGATION } from '@/data/navigation';

export function MobileMenu({
  open,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-[100]">

      <div className="absolute right-0 top-0 h-full w-80 bg-white p-8">

        <button
          onClick={onClose}
          className="mb-8"
        >
          Close
        </button>

        <div className="flex flex-col gap-5">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </div>

      </div>

    </div>
  );
}