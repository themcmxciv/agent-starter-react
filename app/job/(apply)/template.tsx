'use client';

import { PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';

export default function Template({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname.includes(path);

  return (
    <>
      <div className="mb-10 flex gap-4 text-sm">
        <div className="min-w-0 flex-1">
          <span
            className={`${isActive('/sign-up') ? 'bg-base-primary' : 'bg-base-primary/20'} mb-2 block h-2 w-full rounded-full`}
          ></span>
          <p className={`${isActive('/sign-up') ? 'text-base-primary' : 'text-text-secondary'}`}>
            Sign up
          </p>
        </div>
        <div className="min-w-0 flex-1">
          <span
            className={`${isActive('/upload-cv') ? 'bg-base-primary' : 'bg-base-primary/20'} mb-2 block h-2 w-full rounded-full`}
          ></span>
          <p className={`${isActive('/upload-cv') ? 'text-base-primary' : 'text-text-secondary'}`}>
            Upload CV
          </p>
        </div>
        <div className="min-w-0 flex-1">
          <span
            className={`${isActive('/initial-interview') ? 'bg-base-primary' : 'bg-base-primary/20'} mb-2 block h-2 w-full rounded-full`}
          ></span>
          <p
            className={`${isActive('/initial-interview') ? 'text-base-primary' : 'text-text-secondary'}`}
          >
            Initial interview
          </p>
        </div>
      </div>
      {children}
    </>
  );
}
